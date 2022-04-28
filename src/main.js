import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './assets/icon/iconfont.css'
import axios from 'axios'
import router from './router'
import ECharts from 'vue-echarts'
import "echarts"
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)


app.use(ElementPlus, {locale})

app.config.globalProperties.$http = axios

app.use(router)

app.component('v-chart', ECharts)

app.mount('#app')

