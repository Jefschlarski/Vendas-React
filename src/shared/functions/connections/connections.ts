import axios, { AxiosRequestConfig } from "axios";
import { Methods } from "../../enums/methods";
import { ErrorHandler } from "../../utils/errorHandler";
import { getAuthToken } from "./auth";

type methods = Methods.GET | Methods.POST | Methods.DELETE | Methods.PUT | Methods.PATCH;

export default class Connection 
{
    static async call<T> (method: methods, url: string, body?: Object): Promise<T> {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: getAuthToken(),
                'Content-Type': 'application/json',
            },
        }
        if (body != null) {
           return (await axios[method](url, body, config)).data
        } else{
            return (await axios[method]<T>(url, config)).data
        } 
    }

    static async connect<T>(method: methods, url: string, body?: Object): Promise<T> {
       return Connection.call<T>(method, url, body).catch((error) => {
           if (error.response) {
              throw ErrorHandler.getError(error.response.status);
              
           }
           throw ErrorHandler.getError(500);
       }); 
    }
}

export const get = async <T>(url: string): Promise<T> => {
    return Connection.connect<T>(Methods.GET, url);
}

export const post = async <T>(url: string, body: any): Promise<T> => {
    return Connection.connect<T>(Methods.POST, url, body);
}

export const put = async <T>(url: string, body: any): Promise<T> => {
    return Connection.connect<T>(Methods.PUT, url, body);
}

export const patch = async <T>(url: string, body: any): Promise<T> => {
    return Connection.connect<T>(Methods.PATCH, url, body);
}

export const del = async <T>(url: string): Promise<T> => {
    return Connection.connect<T>(Methods.DELETE, url);
}
