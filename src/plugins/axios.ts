import axios, {AxiosRequestConfig, AxiosResponse, Canceler} from 'axios'
import {App} from 'vue';
import qs from 'qs';

const config = {
    baseURL: '/api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
}

const instance = axios.create(config)

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error) => {
    return Promise.reject(error.message)
})

declare interface Api {
    get(path: string): any;
    post(path: string): any
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $api: Api;
    }
}

export default {
    install(app: App) {
        app.config.globalProperties.$api = {
            get(url: string, params: any): any {
                return new Promise((resolve, reject) => {
                    instance.get(url, {
                        params: params
                    }).then(res => {
                        resolve(res.data);
                    }).catch(err => {
                        reject(err.data)
                    })
                })
            },
            post(url: string, params: any): any {
                return new Promise((resolve, reject) => {
                    instance.post(url, qs.stringify(params))
                        .then(res => {
                            resolve(res.data);
                        })
                        .catch(err => {
                            reject(err.data)
                        })
                });
            }
        }
    }
}