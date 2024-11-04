import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import authService from '../Services/authService';

const Login = () => {
  const [identifier, setIdentifier] = useState(''); // Clear default for production
  const [password, setPassword] = useState(''); // Clear default for production
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); // Store error messages
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Navigation hook

  // Check token when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home'); // Redirect to home if token exists
    }
  }, [navigate]);

  // Handle input changes for the identifier (email/username)
  const handleIdentifierChange = (e) => setIdentifier(e.target.value);

  // Handle input changes for the password field
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Toggle password visibility (show/hide)
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading state

    try {
        // Call the releas function from authService
        const result = await authService.login(identifier, password);
        
        // Log the result to the console
        console.log('Login successful:', result.token);

        // Check if access data already exists
        const existingAccessData = localStorage.getItem('accessData');

        if (existingAccessData) {
            // Use the existing access data if available
            console.log('Using existing access data:', existingAccessData);
        } else {
            // Otherwise, store the new token
            localStorage.setItem('token', result.token); // Store token if available
            localStorage.setItem('address_id',result.address_id)
            console.log('Token:', result.token); // Log the token
            console.log("address_id",result.address_id)
        }

        navigate('/home'); // Redirect to Home page
    } catch (err) {
        // Handle errors
        console.error('Login failed:', err.message);
        setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
        setIsLoading(false); // Stop loading state
    }
};

  // Handle "Forgot Password" click
  const handleForgotPassword = () => navigate('/reset-password');

  // Handle "Sign Up" click
  const handleSignUp = () => navigate('/release');

  return (
    <div className="flex justify-center items-center h-screen bg-[#090B2F]">
      <div className="bg-[#090B2F] border border-gray-700 rounded-lg p-8 shadow-lg w-full max-w-md">
        <h1 className="text-white text-xl font-semibold mb-6">Sign In</h1>
        <p className="text-gray-400 text-sm mb-4">Enter your email or username to continue</p>

        <form onSubmit={handleSubmit}>
          {/* Email/Username Input */}
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

          {/* Password Input with Toggle Visibility */}
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

          {/* Error Message */}
          {error && <div className="text-red-500 my-2 text-center">{error}</div>}

          {/* Forgot Password and Sign In Button */}
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
              className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>

          {/* Sign Up Option */}
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
