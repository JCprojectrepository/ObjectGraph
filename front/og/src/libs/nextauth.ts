import { getServerSession, type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import type { JWT } from "next-auth/jwt"

// NextAuthとJWTの型を拡張してアクセストークンとリフレッシュトークンを含める
declare module "next-auth" {
  interface Session {
    accessToken?: string
    userpk?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    refreshToken?: string
    userpk?: string;
  }
}

export const apiAuthRequiredBaseUrl = "/api/proxy/auth";
export const apiPublicBaseUrl = "/api/proxy/public";

// 共通のAPIリクエスト
const fetchAPI = async (url: string, options: RequestInit) => {
  const apiUrl = process.env.NEXT_PUBLIC_WEB_HOST

  if (!apiUrl) {
    throw new Error("API URLが設定されていません")
  }
  console.log(`${apiUrl}${url}`)
  const response = await fetch(`${apiUrl}${url}`, options)

  if (response.status === 401) {
    throw new Error("Unauthorized")
  }

  return response.json()
}

// アクセストークンの検証
const verifyAccessToken = async (token: JWT) => {
  return fetchAPI("/v1/auth/jwt/verify/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token.accessToken }),
  }).then((res) => res.ok)
}

// アクセストークンの更新
const refreshAccessToken = async (token: JWT) => {
  const { access, user_id } = await fetchAPI("/v1/authorize/token/refresh/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: token.refreshToken }),
  })  
  return {
    accessToken: access,
    refreshToken: token.refreshToken,
    userpk:user_id,
  }
}

// ユーザー情報取得
const authorizeUser = async (email: string, password: string, endpoint: string) => {
  const session = await fetchAPI(`/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })

  const user = await fetchAPI("/v1/auth/users/me/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${session.access}`,
    },
  })
  if (session.detail && session.detail === "token is not valid") {
    throw new Error("メールアドレスまたはパスワードが正しくありません")
  } else if (session.detail && session.detail === "user type is not valid"){
    throw new Error("閲覧権限がありません")
  }
  return {
    ...session,
    userpk: session.userpk, // userpkをsessionオブジェクトに含める
  }
}

// NextAuth設定
export const authOptions: NextAuthOptions = {
  // 認証プロバイダーの設定
  providers: [
    // メールアドレス認証
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // メールアドレスとパスワード
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
        endpoint: { label: "endpoint", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("メールアドレスとパスワードを入力してください")
        }

        const endpoint = credentials.endpoint;

        return authorizeUser(credentials.email, credentials.password, endpoint)
      },
    }),
  ],
  // セッションの設定
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        return {
          ...token,
          accessToken: user.access,
          refreshToken: user.refresh,
          userpk: user.userpk,
        }
      }
      try{
        await verifyAccessToken(token);
        return token;
      }catch(e){
        try{
          return refreshAccessToken(token);
        }
        catch(e){
          return {
            ...token,
            error: "Refresh token is not valid",
          }
        }
      }
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.accessToken = token.accessToken
      session.userpk = token.userpk;
      return session
    },
  },
}

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !session.accessToken) {
    return null
  }

  // ユーザー情報を取得
  const user = await fetchAPI("/v1/auth/users/me/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${session.accessToken}`,
    },
  })
  return {
    user,
    accessToken: session.accessToken,
  };
};