import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import api from './request/api'
import vuex from './store/index'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(router).use(vuex).use(elementPlus).use(api).mount('#app')
  

