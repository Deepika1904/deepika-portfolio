import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/deepika-portfolio/', // 👈 the name of your GitHub repo
  plugins: [react()],
})

  