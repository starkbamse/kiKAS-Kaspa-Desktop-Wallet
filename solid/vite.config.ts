import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  build: {
    emptyOutDir:true,
    outDir: './dist',
    rollupOptions: {
      external: ['src/kaspa/*'],
    },
    },
    base: './',
    optimizeDeps: {
      include: ['crypto-js/sha256'],

    },
  
})

