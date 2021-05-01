/** @format */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { App } from 'vue'
import qs from 'qs'

const settings = {
    baseURL: import.meta.env.VITE_API_BASEURL,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' },
}

const instance = axios.create(settings)

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => config,
    (error) => Promise.reject(error),
)

axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => Promise.reject(error.message),
)

declare interface Api {
    get: (path: string, params: any) => any
    post: (path: string, params: any) => any
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $api: Api
    }
}

export default {
    install(app: App) {
        app.config.globalProperties.$api = {
            get(url: string, params: any): any {
                return new Promise((resolve, reject) => {
                    instance
                        .get(url, {
                            params,
                        })
                        .then((res) => {
                            resolve(res.data)
                        })
                        .catch((err) => {
                            reject(err.data)
                        })
                })
            },
            post(url: string, params: any): any {
                return new Promise((resolve, reject) => {
                    instance
                        .post(url, qs.stringify(params))
                        .then((res) => {
                            resolve(res.data)
                        })
                        .catch((err) => {
                            reject(err.data)
                        })
                })
            },
        }
    },
}
