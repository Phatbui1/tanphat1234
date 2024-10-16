// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Mọi request bắt đầu với /api sẽ được chuyển đến http://27.118.21.75:8000
      '/api': {
        target: 'http://27.118.21.75:8000', // Địa chỉ backend của bạn
        changeOrigin: true,  // Giả mạo origin từ frontend để tránh lỗi CORS
        rewrite: (path) => path.replace(/^\/api/, ''), // Xóa /api trong đường dẫn
      },
    },
  },
});
