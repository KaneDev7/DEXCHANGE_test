"use client"
import instanceAxios from '@/lib/axios';
import { User } from '@/types/user.type';
import  { useEffect, useState } from 'react'


const useFetch = (url : string, options: any = {}) => {
    const [data, setData] = useState<(User)[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      let isMounted = true; 
  
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await instanceAxios.get(url, options);
          if (isMounted) {
            setData(response?.data?.result);
            setError(null);
          }
        } catch (err) {
          if (isMounted) {
            setError(err);
            setData(null);
          }
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      };
  
      fetchData();  
      return () => {
        isMounted = false;
      };
    }, [url]);
  
    return { data, loading, error };
  };
  
  export default useFetch;
