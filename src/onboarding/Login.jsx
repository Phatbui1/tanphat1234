import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const defaultUsername = 'tanphat';
    const defaultPassword = 'abc';

    if (username === defaultUsername && password === defaultPassword) {
      localStorage.setItem('token', 'dummy-token');
      navigate('/home');
    } else {
      setError('Sai tài khoản hoặc mật khẩu.');
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
              value={username}
              onChange={handleUsernameChange}
              placeholder="Email, username"
              required
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
