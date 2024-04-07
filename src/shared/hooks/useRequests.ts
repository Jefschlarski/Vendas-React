import { useState } from "react";
import { NotificationTypeEnum, useGlobalContext } from './useGlobalContext';
import Connection, { post } from "../functions/connections/connections";
import { AUTH_URL } from "../constants/urls";
import { ProductRoutesEnum } from "../../modules/product/routes";
import { ERROR_AUTH, ERROR_NOT_FOUND } from "../constants/errors";
import { setAuthToken } from "../functions/connections/auth";
import { Auth } from "../../modules/login/types/Auth";
import { Methods } from "../enums/methods";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const useRequest = () => {
   const [loading, setLoading] = useState(false);
   const { setNotification, setUser } = useGlobalContext();

   const request = async <T>(url: string, method: Methods, saveGlobal?:(object: T) => void, body?: any): Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await Connection.connect<T>(method, url, body).then((response) => {
        if (saveGlobal) {
            saveGlobal(response);
        }
        return response;
    }).catch((error) => {
        setNotification(error.message, NotificationTypeEnum.ERROR);
        return undefined
    })
    setLoading(false);
    return returnObject
   }

   const authRequest = async (navigate: NavigateFunction, body: any): Promise<void> => {
    setLoading(true);
     await post<Auth>(AUTH_URL, body).then((result) => {
        setUser(result.user);
        setAuthToken(result.accessToken);
        navigate(ProductRoutesEnum.PRODUCTS);
        setLoading(false);

    }).catch((e : Error) => {
        if (e.message === ERROR_NOT_FOUND) {
            setNotification(ERROR_AUTH, NotificationTypeEnum.ERROR);
        }else{
            setNotification(e.message, NotificationTypeEnum.ERROR);
        }
        setLoading(false);
    })
    setLoading(false);
   }

   return {
       loading,
       authRequest,
       request,
   };
}