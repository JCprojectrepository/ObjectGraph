import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_WEB_HOST;

let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

export async function refreshToken() {
  if (isRefreshing) {
    return new Promise((resolve) => {
      refreshSubscribers.push(resolve);
    });
  }

  isRefreshing = true;

  try {

    const tokenResponse = await axios.post(`${API_BASE_URL}/v1/authorize/token/`, {}, { withCredentials: true });
    const refreshToken = tokenResponse.data.refresh_token;

    await axios.post(`${API_BASE_URL}/v1/authorize/token/refresh/`, { refresh: refreshToken }, { withCredentials: true });

    isRefreshing = false;
    refreshSubscribers = [];
    return true;
  } catch (error) {
    isRefreshing = false;
    throw error;
  }
}


async function waitForRefresh(): Promise<void> {
  return new Promise((resolve, reject) => {
    // タイムアウトを設定（例: 30秒）
    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject(new Error('Token refresh timeout'));
    }, 30000);

    const interval = setInterval(() => {
      if (!isRefreshing) {
        clearTimeout(timeout);
        clearInterval(interval);
        resolve();
      }
    }, 100); // 例: 1秒ごと
  });
}

export { waitForRefresh };