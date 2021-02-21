import { createApp } from 'vue'
import App from './App.vue'
import Utils from './utils'

const app = createApp(App)

app.use(Utils);
app.mount('#app')
