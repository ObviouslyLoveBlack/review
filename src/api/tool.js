import request from "@/utils/request";

const loginApi = {
    getUserInfo:'/getUserInfo' //获取用户信息
}

export function getUserInfo(params){
    return request({
         url:loginApi.getUserInfo,
         method:'get',
         params,
         headers:{
             'Content-Type':'application/x-www-form-urlencoded'
         }
     })
 }


 export default loginApi