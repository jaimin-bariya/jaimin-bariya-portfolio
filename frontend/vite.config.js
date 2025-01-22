import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@routers': path.resolve(__dirname, 'src/routers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@data': path.resolve(__dirname, 'src/data')
    },
  },
  server: {
    host: '0.0.0.0',  // This allows access from any device on the same network
    port: 5173,        // Make sure this is the same port your app runs on
    strictPort: true,  // Ensure it doesn't change the port
  }
})
