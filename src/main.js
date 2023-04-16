import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/router.js"
import axios from 'axios'

// 定义全局axios对象
const commonRequest = axios.create({
    baseURL: "/api",
    timeout: 100000,
});

commonRequest.interceptors.request.use(config => {
    // 在请求头中添加token
    config.headers.Authorization = window.localStorage.getItem("Authorization");
    return config
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.config.globalProperties.$commonRequest = commonRequest

app.mount('#app')