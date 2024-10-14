import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import authService from "../Services/authService"; // Import authService

const Login = () => {
  const [identifier, setIdentifier] = useState('test_@gmail.com'); // Set test email
  const [password, setPassword] = useState('12345678'); // Set test password
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    try {
      // Call the login function from authService
      const response = await authService.login(identifier.trim(), password.trim());
      console.log('Login successful:', response);
      
      // Save token to localStorage
      localStorage.setItem('token', response.token); // Save the token
      navigate('/home'); // Redirect to home
    } catch (err) {
      // Handle error
      console.error('Login failed:', err.response ? err.response.data : err); // Log full error response
      const errorMessage = err.response?.data?.message || 'Sai tài khoản hoặc mật khẩu.'; // Set error message
      setError(errorMessage);
    }
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');
  };

  const handleSignUp = () => {
    navigate('/release');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#090B2F]">
      <div className="bg-[#090B2F] border border-gray-700 rounded-lg p-8 shadow-lg w-full max-w-md">
        <h1 className="text-white text-xl font-semibold mb-6">Sign In</h1>
        <div>
          <p className="text-gray-400 text-sm mb-4">Enter your email or username to continue</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <input
              type="text"
              className="block w-full py-3 px-4 text-sm text-white bg-[#090b2f] bg-opacity-50 rounded-md border-2 border-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 placeholder-gray-400"
              value={identifier}
              onChange={handleIdentifierChange}
              placeholder="Email or username"
              required
              aria-label="Email or Username" // Accessibility improvement
            />
          </div>
          <div className="relative my-4">
            <input
              type={showPassword ? 'text' : 'password'}
              className="block w-full py-3 px-4 text-sm text-white bg-[#090b2f] bg-opacity-50 rounded-md border-2 border-transparent focus:outline-none focus:ring-0 focus:border-yellow-500 placeholder-gray-400"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              aria-label="Password" // Accessibility improvement
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </div>
          </div>
          {error && (
            <div className="text-red-500 my-2 text-center">{error}</div>
          )}
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
              No account yet? <button className="text-yellow-500 hover:underline" onClick={handleSignUp}>Sign Up</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
