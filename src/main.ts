import { createApp } from 'vue'
import App from './App.vue'
import Utils from './plugins/utils'
import Router from './router'
import Store from './store'
import 'windi.css'

const app = createApp(App)

app
    .use(Router)
    .use(Store)
    .use(Utils)
    .mount('#app')
