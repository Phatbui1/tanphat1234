import axios from 'axios';

// Get the API host from environment variables
const HOST = process.env.REACT_APP_API_HOST || 'http://27.118.21.75:8000/'; // Default to the specified host if the env variable is not set

// Function for user login
const login = async (email, password) => {
  try {
    // Log the email being sent
    console.log({ email });

    const response = await axios.post(`${HOST}v1/auth/login`, {
      email,
      password,
    });

    return response.data; 
  } catch (error) {
    // Log the error details
    console.error('Login error:', error.response ? error.response.data : error);
    throw new Error('Error logging in');
  }
};

// Export the login function
export default {
  login,
};
