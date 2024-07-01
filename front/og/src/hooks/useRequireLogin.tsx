import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from "./useCurrentUser"

export function useRequireLogin() {
  const { isAuthChecking, currentUser } = useCurrentUser();
  const router = useRouter();
  
  useEffect(()=>{
    if(isAuthChecking) return;
    if(!currentUser) router.push("/login"); // 未ログインだったのでリダイレクト
  },[isAuthChecking, currentUser])
}