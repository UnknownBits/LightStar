import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "node:path";
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(),vueDevTools()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',  // 假设Go后端API在8080端口
    },
  },
})
