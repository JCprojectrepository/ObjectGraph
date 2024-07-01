'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';


function useSessionLoader() {
    const [sessionLoaded, setSessionLoaded] = useState(false);
    const { data: session,status } = useSession();
    const currentPath = usePathname()
    useEffect(() => {
        if (status !== 'loading') {
            if (status === 'unauthenticated') {
                if (currentPath?.startsWith('/manager')) {
                    window.location.href = '/manager/login';
                  } else if (currentPath?.startsWith('/mentor')) {
                    window.location.href = '/mentor/login';
                  } else if (currentPath?.startsWith('/management')) {
                    window.location.href = '/management/login';
                  } else {
                    window.location.href = '/login';
                }
                setSessionLoaded(true);
            } else if (status === 'authenticated') {
                setSessionLoaded(true);
            }
        }
    }, [status]);

    return sessionLoaded;
}

export default useSessionLoader;