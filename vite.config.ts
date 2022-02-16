import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './src',
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
})
