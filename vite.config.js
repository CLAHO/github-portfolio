import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  //base: process.env.NODE_ENV === 'production' ? '/github-portfolio/' : '/',
  base: '/github-portfolio/', // required for GitHub Pages
  plugins: [react()],
})