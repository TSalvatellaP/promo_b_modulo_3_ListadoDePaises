import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/promo_b_modulo_3_ListadoDePaises/",
  server:{
    watch:{
      usePolling: true,
    },
    open:true,
  }
});
