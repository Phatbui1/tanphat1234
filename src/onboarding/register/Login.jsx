import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import authService from '../Services/authService'; // Gọi authService

const Login = () => {
  const [identifier, setIdentifier] = useState('test_@gmail.com'); // Email test
  const [password, setPassword] = useState('12345678'); // Mật khẩu test
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Điều hướng giữa các trang

  // Xử lý thay đổi email/username
  const handleIdentifierChange = (e) => {
    const value = e.target.value;
    setIdentifier(value);
    console.log(value); // In ra giá trị hiện tại
  };

  // Xử lý thay đổi mật khẩu
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log(value); // In ra giá trị hiện tại
  };

  // Toggle hiện/ẩn mật khẩu
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Xử lý đăng nhập khi submit form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn form gửi bình thường

    try {
      // Gọi API login từ authService
      const response = await authService.login(identifier.trim(), password.trim());

      console.log('Login successful:', response);

      // Lưu token vào localStorage nếu đăng nhập thành công
      localStorage.setItem('token', response.token); 
      navigate('/home'); // Chuyển hướng tới trang Home
    } catch (err) {
      console.error('Login failed:', err.response ? err.response.data : err); // Hiển thị thông báo lỗi chi tiết

      // Hiển thị thông báo lỗi từ backend nếu có, nếu không thì dùng thông báo mặc định
      const errorMessage = 'Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản hoặc mật khẩu.';
      setError(errorMessage);
    }
  };

  // Xử lý khi nhấn "Quên mật khẩu"
  const handleForgotPassword = () => navigate('/reset-password');

  // Xử lý khi nhấn "Đăng ký"
  const handleSignUp = () => navigate('/release');

  return (
    <div className="flex justify-center items-center h-screen bg-[#090B2F]">
      <div className="bg-[#090B2F] border border-gray-700 rounded-lg p-8 shadow-lg w-full max-w-md">
        <h1 className="text-white text-xl font-semibold mb-6">Sign In</h1>
        <p className="text-gray-400 text-sm mb-4">Enter your email or username to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <input
              type="text"
              className="block w-full py-3 px-4 text-sm text-white bg-[#090b2f] bg-opacity-50 rounded-md border-2 focus:outline-none focus:border-yellow-500 placeholder-gray-400"
              value={identifier}
              onChange={handleIdentifierChange}
              placeholder="Email or username"
              required
              aria-label="Email or Username"
            />
          </div>

          <div className="relative my-4">
            <input
              type={showPassword ? 'text' : 'password'}
              className="block w-full py-3 px-4 text-sm text-white bg-[#090b2f] bg-opacity-50 rounded-md border-2 focus:outline-none focus:border-yellow-500 placeholder-gray-400"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              aria-label="Password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </div>
          </div>

          {error && <div className="text-red-500 my-2 text-center">{error}</div>}

          <div className="flex flex-col items-end">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-yellow-500 text-xs font-medium mb-2"
            >
              Forgot password?
            </button>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md"
            >
              Sign In
            </button>
          </div>

          <div className="text-center text-white font-medium py-4">
            <p className="text-sm">
              No account yet?{' '}
              <button className="text-yellow-500 hover:underline" onClick={handleSignUp}>
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
