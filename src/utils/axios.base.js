import service from "./request";
import Qs from "qs";

export function Get(url,params){
    return service({
        url:`${url}`,
        method:'get',
        params:params,
        paramsSerializer:(params)=>{
          return Qs.stringify(params,{
            indices:false
          })
        }
    })
}
export function Post(url,data){
    return service({
        url:`${url}`,
        method:'post',
        data:Qs.stringify(data)
    })
}

export function PostByDataJson(url,data){
    return service({
        url:`${url}`,
        method:'post',
        data:data
    })
}

export function Put(url,data){
    return service({
        url:`${url}`,
        method:'put',
        data:Qs.stringify(data)
    })
}

export function Delete(url,data){
    return service({
        url:`${url}`,
        method:'delete',
        data:Qs.stringify(data)
    })
}