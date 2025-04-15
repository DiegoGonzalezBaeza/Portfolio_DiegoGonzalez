import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio_DiegoGonzalez/', // 👈 Esto es clave
  plugins: [react(), tailwindcss(),  glsl()],
})
