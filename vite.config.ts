import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
