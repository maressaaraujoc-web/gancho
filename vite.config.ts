import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Seu código precisa desta importação para o 'resolve' funcionar

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // CORREÇÃO FINAL: Mapeia VITE_GEMINI_API_KEY (Vercel) para GEMINI_API_KEY (código)
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(import.meta.env.VITE_GEMINI_API_KEY),
  },

  // Seu bloco 'resolve' para imports @
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
