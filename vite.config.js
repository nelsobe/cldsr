import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // For running at www.et.byu.edu
  base: "~nelson/cldsr",
  // For running at nelsobe.github.io/cldsr
  // base: "/cldsr",
  plugins: [react()],
})
