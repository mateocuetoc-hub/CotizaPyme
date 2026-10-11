import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite levanta el frontend de React en un servidor local de desarrollo.
export default defineConfig({
  plugins: [react()],
})
