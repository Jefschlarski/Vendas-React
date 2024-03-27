import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from './useGlobalContext';
export const useRequest = () => {
   const [loading, setLoading] = useState(false);
   const { setNotification } = useGlobalContext();
   const getRequest = async (url: string) => {
    setLoading(true);
    await axios.get(url) 
    .then((response) => {
        setLoading(false);
        return response.data
    }).catch((error) => {
        console.log(error);
        setLoading(false);
    })
   }

   const postRequest = async (url: string, body: any) => {
    setLoading(true);
    await axios.post(url, body) 
    .then((response) => {
        setNotification('Entrando...', 'success');
        return response.data
    }).catch((error) => {
        setNotification('Senha inválida', 'error');
    })
    setLoading(false);
   }

   return {
       loading,
       getRequest,
       postRequest,
   };
}