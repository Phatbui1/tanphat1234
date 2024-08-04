import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const defaultUsername = 'tanphat';
    const defaultPassword = 'abc';

    if (username === defaultUsername && password === defaultPassword) {
      // Simulate successful login
      localStorage.setItem('token', 'dummy-token');
      navigate('/home'); // Redirect to the Home page
    } else {
      // Display error message
      setError('Sai tài khoản hoặc mật khẩu.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');
  };

  const handleSignUp = () => {
    navigate('/release'); // Redirect to the release page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#090B2F]">
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 w-full max-w-md">
        <h1 className="text-white">Sign In</h1>
        <div>
          <p className="text-white">Enter your mail and password</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <input
              type="text"
              className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <label
              htmlFor=""
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tên đăng nhập
            </label>
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label
              htmlFor=""
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mật khẩu
            </label>
          </div>
          {error && (
            <div className="text-red-500 my-2 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Đăng nhập
          </button>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-right text-yellow-500 font-bold py-2 px-4 rounded mt-2 w-full"
          >
            Forgot your password?
          </button>
          <div className='text-white font-bold py-2 px-4 rounded'>
            <p>no account yet? <button className='text-yellow-500 font-bold py-2 px-4 rounded' onClick={handleSignUp}>sign up</button></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
