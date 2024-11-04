import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/authService';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState(''); // Keep this field but not displayed
  const [referralId, setReferralId] = useState(''); // Keep this field but not displayed
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Redirect to Home if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation for email and password fields
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    setError(''); // Clear error messages
    setIsLoading(true); // Set loading state
  
    try {
      // Pass all required fields to the releas function
      const result = await authService.releas(email, password, confirmPassword, username, referralId);
      
      console.log('Registration successful:', result);
      localStorage.setItem('access_token', result.access_token); // Store token if available
      localStorage.setItem('address_id', result.address_id);
      // Log the token to the console
      console.log('address_id',result.address_id)
      console.log('access_token',result.access_token)
      navigate('/home'); // Redirect to Home page
    } catch (err) {
      // Handle errors
      setError(err.message);
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#090B2F]">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-[#1A1D4F]">
        <h2 className="text-2xl font-bold text-left text-white">Sign Up</h2>
        <p className="text-left text-gray-400">Hi, register to start experiencing Superlott</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text" // Change type to text for username
            className="block w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-600 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username" // Added placeholder for username
          />
          <input
            type="email"
            className="block w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-600 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="block w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-600 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Your password"
          />
          <input
            type="password"
            className="block w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-600 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />

          {/* Display error messages */}
          {error && <div className="text-red-500">{error}</div>}

          <button
            type="submit"
            disabled={isLoading} // Disable button if loading
            className="block w-full py-2.5 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            {isLoading ? 'Processing...' : 'Continue'}
          </button>
        </form>
        <p className="text-center text-gray-400">
          Already have an account?{' '}
          <a href="#" onClick={() => navigate('/login')} className="text-yellow-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
