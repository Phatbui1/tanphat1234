import axios from 'axios';

const login = async (email, password) => {
  try {
    // Gọi API đăng nhập qua proxy /api
    const response = await axios.post('/api/v1/auth/login', { email, password });

    console.log('Response từ API:', response.data); // Log kết quả API
    return response.data; // Trả về dữ liệu từ backend
  } catch (error) {
    console.error('Lỗi đăng nhập:', error.response ? error.response.data : error); // Log chi tiết lỗi
    throw error; // Ném lỗi để xử lý ở Login.js
  }
};

export default { login };
