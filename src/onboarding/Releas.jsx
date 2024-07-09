import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
        <p className="text-center text-gray-400">Hi, register to start experiencing Superlott</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              className="block w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              className="block w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Your password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center"
            >
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12m2 0a7.5 7.5 0 11-10.5-6 7.5 7.5 0 0110.5 6zm-7.5 0a7.5 7.5 0 0110.5 6 7.5 7.5 0 01-10.5-6zm2.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <input
              type="password"
              className="block w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center"
              // Add functionality to toggle password visibility if needed
            >
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12m2 0a7.5 7.5 0 11-10.5-6 7.5 7.5 0 0110.5 6zm-7.5 0a7.5 7.5 0 0110.5 6 7.5 7.5 0 01-10.5-6zm2.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
                />
              </svg>
            </button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button
            type="submit"
            className="block w-full py-2.5 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-gray-400">
          Already have an account?{' '}
          <a href="#" className="text-yellow-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
