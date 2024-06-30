import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { refreshToken,waitForRefresh } from './refreshToken';

const API_BASE_URL = process.env.NEXT_PUBLIC_WEB_HOST;

async function verifyToken() {

  try {
    await axios.post(`${API_BASE_URL}/v1/authorize/token/verify/`, {}, { withCredentials: true });
    return true;
  } catch (error) {
    return false;
  }
}

// リクエストを実行する基本的な関数
async function request(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: string,
  data?: any,
  config: AxiosRequestConfig = {},
  skipTokenValidation: boolean = false
): Promise<AxiosResponse> {

  // トークンの検証をスキップするかどうかをチェック
    if (!skipTokenValidation) {
      const isTokenValid = await verifyToken();
      if (!isTokenValid) {
        const isRefreshed = await refreshToken();
        if (!isRefreshed) {
          await waitForRefresh();
        }
     }
   }


  try {
    const axiosRequest = axios({ 
      method, 
      url, 
      data, 
      ...config,
      withCredentials: true }
      ).then(response => {
      return response;
    }).catch(error => {
      throw error;
    });

    return axiosRequest;
  } catch (error) {
    throw error;
  }
}


// GETリクエスト
export const fetchData = (
  endpoint: string,
  config?: AxiosRequestConfig,
  skipTokenValidation: boolean = false,
): Promise<AxiosResponse> => {
  return request('get', `${API_BASE_URL}/${endpoint}`, undefined, config, skipTokenValidation);
};

// POSTリクエスト
export const postData = (
  endpoint: string,
  data: any,
  config?: AxiosRequestConfig,
  skipTokenValidation: boolean = false,
): Promise<AxiosResponse> => {
  return request('post', `${API_BASE_URL}/${endpoint}`, data, config, skipTokenValidation);
};

// PUTリクエスト
export const putData = (
  endpoint: string,
  data: any,
  config?: AxiosRequestConfig,
  skipTokenValidation: boolean = false,
): Promise<AxiosResponse> => {
  return request('put', `${API_BASE_URL}/${endpoint}`, data, config, skipTokenValidation);
};

// PUTリクエスト
export const patchData = (
  endpoint: string,
  data: any,
  config?: AxiosRequestConfig,
  skipTokenValidation: boolean = false,
): Promise<AxiosResponse> => {
  return request('patch', `${API_BASE_URL}/${endpoint}`, data, config, skipTokenValidation);
};

// DELETEリクエスト
export const deleteData = (
  endpoint: string,
  data: any,
  config?: AxiosRequestConfig,
  skipTokenValidation: boolean = false,
): Promise<AxiosResponse> => {
  return request('delete', `${API_BASE_URL}/${endpoint}`, undefined, { ...config, data });
};