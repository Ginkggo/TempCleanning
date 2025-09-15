import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base ('./') ensures assets work on GitHub Pages project sites.
export default defineConfig({
  plugins: [react()],
  base: './',
})
