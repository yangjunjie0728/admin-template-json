import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
  build: {
    outDir: 'service-list',
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/sign': {
        // target: 'http://134.175.107.136:9011/',
        target: 'http://192.168.1.170:9062/',
        changeOrigin: true,
      },
    },
  },
})
