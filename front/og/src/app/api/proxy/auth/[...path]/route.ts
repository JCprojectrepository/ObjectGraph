// pages/api/proxy/[...path].ts
import { getToken } from "next-auth/jwt";
import axios from "axios";
import { getAuthSession } from "@/libs/nextauth";
import { NextRequest, NextResponse } from "next/server";

// DjangoバックエンドのベースURL
const API_BASE_URL = process.env.NEXT_PUBLIC_WEB_HOST;

function getPathAfterPrefix(url:string, prefix:string) {
  // URLオブジェクトを作成
  const urlObj = new URL(url, API_BASE_URL); 
  let pathAfterPrefix = urlObj.pathname.replace(prefix, '')+"/"
  if (urlObj.search != ""){
    pathAfterPrefix += urlObj.search
  }

  return pathAfterPrefix;
}

// 共通のリクエスト処理を行う関数
async function handleRequest(req: NextRequest,  method:string) {
  // '/api/proxy/' を取り除く
  const basePath = '/api/proxy/auth/';
  let path = req.url;
  const pathAfterPrefix = getPathAfterPrefix(path, basePath);
  const apiUrl = `${API_BASE_URL}/${pathAfterPrefix}`;

  const { user, accessToken } = await getAuthSession() || { user: null, accessToken: null };
  //if (!user || !accessToken){
  //  return NextResponse.redirect(`${CLIENT_URL}/login`);
  //}

  // ユーザー情報取得のリクエストの場合は、ユーザー情報を返却
  if (pathAfterPrefix == "v1/auth/users/me/" && method == "GET" && user){
    return NextResponse.json({ status: 200, data: user })
  }
  let body = null;
  if (["POST", "PUT", "PATCH"].includes(method)) {
    try {
      const parsedBody = await req.json();
      if (Object.keys(parsedBody).length > 0) {
        // parsedBodyが空ではない場合
        body = parsedBody;
      }
      // parsedBodyが空の場合、bodyは既にnullに設定されています
    } catch (error) {
      // リクエストボディが存在しない場合、エラーが投げられることがあるため、ここではbodyをnullに保ちます
      console.log('リクエストボディが空または不正なJSON形式です。', error);
      body = null;
    }
  }
  let headers = null;
  if (accessToken == null) {
    headers= {
      "Content-Type": "application/json",
    }
  }
  else{
    headers= {
      "Authorization": `JWT ${accessToken}`,
      "Content-Type": "application/json",
      "userid": user?.id,
    }

  }
  try {
    const response = await axios({
      method: method,
      url: apiUrl,
      headers: headers,
      data: body,
    });
    return NextResponse.json({ status: response.status as number,data: response.data })
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json({ status: error.response.status as number, statusText: error.response.statusText})
    }
    return new NextResponse("build started!", {
      headers: { "Content-Type": 'application/json' },
  });
  }
}

// 各HTTPメソッドに対応する名前付きエクスポート関数
export async function GET(req: NextRequest) { return handleRequest(req, "GET"); }
export async function POST(req: NextRequest) { return handleRequest(req, "POST"); }
export async function PUT(req: NextRequest) { return handleRequest(req, "PUT"); }
export async function PATCH(req: NextRequest) { return handleRequest(req, "PATCH"); }
export async function DELETE(req: NextRequest) { return handleRequest(req, "DELETE"); }