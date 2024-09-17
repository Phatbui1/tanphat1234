import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

const Guild4 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const defaultEmail = 'buitanphat6112003@gmail.com'; // Fixed typo in defaultEmail

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
        <div className="flex items-center mb-4">
          <IoIosArrowRoundBack
            className="text-white text-4xl cursor-pointer mr-1"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-white text-2xl font-bold flex-1 text-center">Reset Your Password</h1>
        </div>
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
            className="mt-4 w-full bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Guild4;
