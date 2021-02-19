import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/index.less'
import http from './http'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
