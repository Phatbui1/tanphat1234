import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
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

    // Navigate to the User page after successful sign up
    navigate('/user');
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

  const handleSignInClick = () => {
    // Navigate to the Login page
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#090B2F]">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-left text-white">Sign Up</h2>
        <p className="text-left text-gray-400">Hi, register to start experiencing Superlott</p>
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
          <a href="#" onClick={handleSignInClick} className="text-yellow-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
