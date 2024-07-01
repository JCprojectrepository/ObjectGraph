'use client';
import Mermaid from '@/components/Mermaid';
import { apiPublicBaseUrl } from "@/libs/nextauth";
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Loading from '@/app/loading';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import { useState, useEffect } from "react";

const MyPage: React.FC = () => {
    const [jsonData, setJson] = useState<any>();
    const { handleError } = useErrorHandler();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJson = async () => {
            try {
                const userId = "jhivkewhjzxn";
                const jsonId = "fhjhljkbsdfl";
                const apiPath = `v1/json/${userId}/${jsonId}`;
                const response = await axios.get(`${apiPublicBaseUrl}/${apiPath}`);
                if (response.data.status === 200) {
                    // 改行コードを実際の改行に変換し、各行の末尾のスペースを削除
                    const formattedContent = response.data.data.json.content
                        .replace(/\\n/g, '\n')
                        .split('\n')
                        .map((line: string) => line.trimEnd())
                        .join('\n');
                    
                    setJson({ ...response.data.data, json: { ...response.data.data.json, content: formattedContent } });
                } else {
                    console.log(response);
                    handleError(response as any);
                }
            } catch (error) {
                handleError({ status: 500, message: 'An unexpected error occurred' });
            } finally {
                setIsLoading(false);
            }
        };
        fetchJson();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h1>My Mermaid Chart</h1>
            {jsonData && <Mermaid chart={jsonData.json.content} />}
        </div>
    );
};

export default MyPage;
