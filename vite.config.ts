import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // CORREÇÃO: Mapeia VITE_GEMINI_API_KEY para process.env.GEMINI_API_KEY
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(import.meta.env.VITE_GEMINI_API_KEY),
  },
})
