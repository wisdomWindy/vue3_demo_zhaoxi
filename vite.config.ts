import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':'/src'
    },
    extensions:['.ts']
  },
  publicDir:'/',
  server:{
    proxy:{
      '^/api':{
        target:'',
        changeOrigin:true,
        rewrite:(path) => ''
      }
    }
  }
})
