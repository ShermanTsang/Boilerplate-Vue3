import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), WindiCSS()],
    resolve: {
        alias: {
            '/@': path.resolve(__dirname, './src'),
            '/@views': path.resolve(__dirname, './src/views'),
            '/@components': path.resolve(__dirname, './src/components'),
            '/@plugins': path.resolve(__dirname, './src/plugins'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/assets/styles/global.scss";`
            }
        }
    }
})
