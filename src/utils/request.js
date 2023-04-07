import axios from 'axios'
import storage from 'store'
// import store from '@/store'
import { VueAxios } from './axios'

const { ACCESS_TOKEN } = '=access-token'

// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 60000 // 请求超时时间
})

request.interceptors.request.use(
    config => {
        const token = storage.get(ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = "Bear" + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        if (response && response.status === 200) {
            return response.data
        } else {
            return Promise.reject(response.data.msg)
        }
    },
    error => {
        return Promise.reject(error)
    }
)



const installer = {
    vm: {},
    install(Vue) {
        Vue.use(VueAxios, request)
    }
}

export default request

export {
    installer as VueAxios,
    request as axios
}
