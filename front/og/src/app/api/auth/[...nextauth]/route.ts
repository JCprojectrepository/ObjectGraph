import { authOptions } from "@/libs/nextauth"
import NextAuth from "next-auth/next"

// NextAuth関数に設定オプションを渡して認証ハンドラを作成
const handler = NextAuth(authOptions)


export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
}