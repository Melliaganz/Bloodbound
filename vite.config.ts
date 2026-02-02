import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
    define: {
    __APP_YEAR__: JSON.stringify(new Date().getFullYear()),
    __DEVELOPPER__: JSON.stringify('Lengrand Lucas'),
    __GITHUB__: JSON.stringify('https://github.com/Melliaganz'),
    __HELLHOUNDS__: JSON.stringify('Hellhounds'),
  },
})
