// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirect requests starting with /v1 to the backend server
      '/v1': {
        target: 'http://27.118.21.75:8000', // Your backend API server
        changeOrigin: true,  // Avoid CORS by faking origin
        secure: false,  // Disable SSL verification if the backend uses http
        rewrite: (path) => path.replace(/^\/v1/, '/v1'), // Keep /v1 in the path
      },
    },
  },
});
