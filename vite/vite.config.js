import { fileURLToPath, URL } from 'node:url'

import { defineConfig ,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((mode)=>{
  const config = loadEnv(mode, './')
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server:{
      port:8089,
      // proxy: {
      //   '/api': {
      //     target: config.VITE_BASIC_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/basice/, '')
      //   }
      // }
    }
  }
  
})
