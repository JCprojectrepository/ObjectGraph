import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { fetchData, postData, putData, patchData, deleteData } from '@/services/api';
import { GetHeader } from "@/services/getHeader";
import { useSession } from 'next-auth/react';
import useSessionLoader from '@/hooks/useSessionLoader';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

const useDataFetcher = (
  endpoints: string[], 
  method: HttpMethod = 'get', 
  usePromise = false
) => {
  type Data = any[];
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data>([]);
  const sessionLoaded = useSessionLoader();
  const { data: session} = useSession();
  
  useEffect(() => {
    const fetchDataInternal = async () => {
      if (!sessionLoaded) return;
      const config = GetHeader({ session: session });
      setIsLoading(true);
      try {
        let responses: any[];
        if (usePromise) {
          responses = await Promise.all(
            endpoints.map(async (endpoint) => {
              switch (method) {
                case 'get':
                  return await fetchData(endpoint, config);
                case 'post':
                  return await postData(endpoint, config);
                case 'put':
                  return await putData(endpoint, config);
                case 'patch':
                  return await patchData(endpoint, config);
                case 'delete':
                  return await deleteData(endpoint, config);
                default:
                  throw new Error('Invalid method specified');
              }
            })
          ) as AxiosResponse<any, any>[];
        } else {
          const endpoint = endpoints[0];
          switch (method) {
            case 'get':
              responses = [await fetchData(endpoint, config)];
              break;
            case 'post':
              responses = [await postData(endpoint, config)];
              break;
            case 'put':
              responses = [await putData(endpoint, config)];
              break;
            case 'patch':
              responses = [await patchData(endpoint, config)];
              break;
            case 'delete':
              responses = [await deleteData(endpoint, config)];
              break;
            default:
              throw new Error('Invalid method specified');
          }
        }
        const responseData = responses.map(response => response.data);
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataInternal();
  }, [sessionLoaded]);

  return { isLoading, data };
};

export default useDataFetcher;