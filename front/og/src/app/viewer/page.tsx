'use client';
import Mermaid from '@/components/Mermaid';
import { apiPublicBaseUrl } from "@/libs/nextauth"
import Typography from '@mui/material/Typography';
import axios, { AxiosError } from 'axios';
import Loading from '@/app/loading';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import { useState, useEffect } from "react";

const MyPage: React.FC = () => {
    const [json, setJson] = useState();
    const { handleError } = useErrorHandler();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchJson = async () => {
            try {
                const jsonid = "jhivkewhjzxn";
                const apiPath = `v1/json/${jsonid}`;
                const response = await axios.get(`${apiPublicBaseUrl}/${apiPath}`);
                if (response.data.status === 200) {
                    console.log(response.data)
                    setJson(response.data.data);
                }else{
                    console.log(response)
                    handleError(response as any);
                }
            } 
            catch (error) {
                handleError({status: 500, message: 'An unexpected error occurred'});
            } 
            finally {
                setIsLoading(false);
            }
        };
        fetchJson();
      }, []);
    if (isLoading) {
        return <Loading />; 
    }
    
  const chart = `
    graph TD
    A[Start] --> B[Process]
    B --> C[End]
    click A "https://example.com" "Tooltip for link"
    click B "https://example.com/process" "Go to process page"
    click C "https://example.com/end" "End page"
  `;

  return (
    <div>
      <h1>My Mermaid Chart</h1>
      <Mermaid chart={chart} />
    </div>
  );
};

export default MyPage;