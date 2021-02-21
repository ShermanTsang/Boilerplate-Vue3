import { createApp } from 'vue'
import App from './App.vue'
import Utils from './plugins/utils'
import Router from './router'

const app = createApp(App)

app
    .use(Router)
    .use(Utils)
    .mount('#app')
