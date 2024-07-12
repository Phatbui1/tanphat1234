import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Guild4 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const defaultEmail = 'buitanphat6112003@gmail.com'; // Sửa lỗi chính tả trong defaultEmail

    if (email === defaultEmail) {
      console.log('Resetting password for email:', email);
      // Navigate to Guild5 after successful reset
      navigate('/guild5');
    } else {
      setError('Email không hợp lệ.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#090B2F]">
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-4 text-center">Reset Your Password</h1>
        <form onSubmit={handleSubmit}>
          <p className="text-gray-400 mb-2 text-center">Please enter your email to reset your password</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder-gray-500 border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:border-yellow-500 w-full"
            required
          />
          {error && (
            <div className="text-red-500 my-2 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="mt-4 w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Guild4;
