import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
