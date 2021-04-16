import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
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
      "@": resolve(__dirname, 'packages/render/src')
    }
  },
  build: {
    outDir: 'packages/render-build'
  }
})
