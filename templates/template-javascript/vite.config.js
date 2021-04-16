/*
 * @Author: your name
 * @Date: 2021-04-10 15:15:43
 * @LastEditTime: 2021-04-10 23:44:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-vue-electron\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  root: '',
  server: {
    watch: {
      ignored: ['**/render-build/**', '**/build/**'],
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'packages/render/src')
    }
  },
  build: {
    outDir: 'packages/render-build'
  }
})
