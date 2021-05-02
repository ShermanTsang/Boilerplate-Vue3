/** @format */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { App } from 'vue'
import qs from 'qs'

const settings = {
    backend: {
        baseURL: import.meta.env.VITE_API_BACKEND_BASEURL,
        timeout: 10000,
        headers: { 'X-Custom-Header': 'foobar' },
    },
}

const instance: AxiosInstance = {
    backend: axios.create(settings.backend),
}

// instance.backend.interceptors.request.use(
//     (config: AxiosRequestConfig) => config,
//     (error: any) => Promise.reject(error),
// )

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => config,
    (error) => Promise.reject(error),
)

axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => Promise.reject(error.message),
)

declare interface Api {
    (instanceName: string): {
        get: (path: string, params: any) => any
        post: (path: string, params: any) => any
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $api: Api
    }
}

export default {
    install(app: App) {
        app.config.globalProperties.$api = (instanceName: string) => {
            return {
                get(url: string, params: any): any {
                    return new Promise((resolve, reject) => {
                        instance[instanceName]
                            .get(url, {
                                params,
                            })
                            .then((res: { data: unknown }) => {
                                resolve(res.data)
                            })
                            .catch((err: { data: any }) => {
                                reject(err.data)
                            })
                    })
                },
                post(url: string, params: any): any {
                    return new Promise((resolve, reject) => {
                        instance[instanceName]
                            .post(url, qs.stringify(params))
                            .then((res: { data: unknown }) => {
                                resolve(res.data)
                            })
                            .catch((err: { data: any }) => {
                                reject(err.data)
                            })
                    })
                },
            }
        }
    },
}
