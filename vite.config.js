import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        nimbus : ['Nimbus','sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        cascadia: ['Cascadia Mono', 'monospace'],
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})
