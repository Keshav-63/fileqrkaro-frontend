import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/upload': {
        target: 'https://keshavsuthar-dev.hf.space',
        changeOrigin: true,
        secure: false,
      },
      '/download': {
        target: 'https://keshavsuthar-dev.hf.space',
        changeOrigin: true,
        secure: false,
      },
      '/submit-contact': {
        target: 'https://keshavsuthar-dev.hf.space',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
