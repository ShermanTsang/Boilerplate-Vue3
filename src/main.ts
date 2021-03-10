/** @format */

import {createApp} from 'vue'
import App from '/@/App.vue'
import Router from '/@/router'
import Store from '/@/store'
import Utils from '/@plugins/utils'
import Axios from '/@plugins/axios'
import '@virtual/windi.css'

const app = createApp(App)

app.use(Router).use(Store).use(Utils).use(Axios).mount('#app')
