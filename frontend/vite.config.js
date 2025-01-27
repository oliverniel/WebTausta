import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
    port: process.env.PORT || 3001,
    host: true,
    preview: {
      allowedHosts: ['webtausta.onrender.com']
    },
  }
})