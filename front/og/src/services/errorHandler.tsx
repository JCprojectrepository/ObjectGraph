import { AxiosError } from "axios";
import {useRouter} from 'next/navigation';

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

  const handleError = (error: any, redirectToLogin?: () => Promise<void>) => {
    // エラー処理をここに実装
    if (!error.response) {
      return;
    }
    const { status, data } = error.response;

    switch (status) {
      case 400:
        const errorMessages: string[] = Object.keys(data).reduce((messages: string[], key) => {
          // エラーメッセージが配列になっていることを確認し、全てのメッセージを一つの配列に結合する
          const value = data[key];
          if (Array.isArray(value)) {
            return messages.concat(value.map(message => `${message}`));
          }
          return messages;
        }, []);
        // 結合したエラーメッセージをアラート表示する
        //alert(errorMessages.join('\n'));
        break;
      case 401:
        if (redirectToLogin) {
          redirectToLogin();
        } else {
          router.push('/login');
        }
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
  };

  return { handleError };
};