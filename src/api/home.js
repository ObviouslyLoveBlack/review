import request from "@/utils/request";

const homeApi = {
    getDetailIntro:'/home/getDetailIntro', // 获取首页详细信息
}

export function getDetailIntro(params){
    return request({
        url:homeApi.getDetailIntro,
        method:'get',
        params,
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
    })
}