import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './request/api'
import {createPinia} from 'pinia'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/reset.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.use(router).use(createPinia()).use(elementPlus).use(api).mount('#app')
  
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}