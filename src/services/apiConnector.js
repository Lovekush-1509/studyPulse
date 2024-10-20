import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method,url,body,params,header) =>{
    return axiosInstance ({
        method:`${method}`,
        url:`${url}`,
        data: body ? body : null,
        headers: header ? header: null,
        params: params ? params : null,
    })
}