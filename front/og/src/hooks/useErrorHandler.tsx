import {useRouter, usePathname} from 'next/navigation';

export type ApiError = {
    status: number;      // HTTPステータスコード
    message: string;     // エラーメッセージ
    details?: any;       // エラーの詳細情報やスタックトレースなど（オプショナル）
};

export const initialErrorState: ApiError = {
    status: 0,
    message: '',
    details: null
};


export const useErrorHandler = () => {

  const router = useRouter();

  // 現在のパスを取得
  const pathname = usePathname();
  // パスからアプリケーション名を取得
  // パスに「/viewer」を含む場合
  let redirectUrl = '';
  if (pathname && pathname.includes('/viewer')) {
    redirectUrl = '/login';
  } 
  else if (pathname && pathname.includes('/manager')) {
    redirectUrl = '/manager/login';
  }
  else if (pathname && pathname.includes('/management')) {
    redirectUrl = '/management/login';
  }
  else if (pathname && pathname.includes('/mentor')) {
    redirectUrl = '/mentor/login';
  }


  const handleError = (error: any, redirectToLogin?: () => Promise<void>) => {
    // Djangoのアプリケーション側から返却されるエラー情報を処理
    try {
      switch (error.data.status) {
        case 400:
          router.push('/403');
        case 401:
          router.push(redirectUrl);
          break;
        case 403:
          router.push('/403');
          break;
        case 404:
          break;
        case 500:
          router.push('/500');
          break;
        default:
          alert('予期しないエラーが発生しました。');
          break;
      }
    } catch (e) {
        // Djoserから返却されるエラー情報を処理(ログイン未済等)
        if(error.status == 401 || error.status == 403){
          router.push(redirectUrl);
        }
        else{
          router.push(`/`);
        }
    }
  };
  return { handleError };
};