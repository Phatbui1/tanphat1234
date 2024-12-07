import axios from 'axios';
import {HOST, VERSION} from './common';

const API_LOGIN = HOST + VERSION + '/auth/login'; // Đảm bảo rằng URL này là chính xác
const API_REGISTER = HOST + VERSION + '/auth/register'

const API_WALLET_INFO = HOST + VERSION + '/wallet/info'
const API_WALLET_CREATE = HOST + VERSION + '/wallet/create'

const login = async (email, password) => {
  try {
    // Gửi yêu cầu với đúng tham số
    const response = await axios.post(API_LOGIN, {
      email: email, // Thay đổi từ 'email' thành 'identifier' nếu API yêu cầu
      password: password
    });
   
    // Kiểm tra phản hồi từ server
    if (response.status === 200 && response.data.data.access_token) {
      return { token: response.data.data.access_token , address_id :response.data.data.address_id }; // Trả về token
    } else {
      throw new Error('Invalid login response'); // Thông báo lỗi nếu phản hồi không như mong đợi
    }
  } catch (error) {
    // Thông báo lỗi từ server nếu có
    const message = error.response?.data?.message || 'Login failed. Please check your email and password.';
    throw new Error(message);
  }
};
 // Use the correct port if necessary

 const releas = async (email, password, confirm_password, username, referral_id) => {
  try {
    console.log("Sending registration request with the following data:");
    console.log({ email, password, confirm_password, username, referral_id });

    const response = await axios.post(API_REGISTER, {
      email,
      password,
      confirm_password,
      username,
      referral_id,
    });

    console.log('Full response from API:', response);
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);

    if (response.status >= 200 && response.status < 300) {
      console.log('Response from register1.2:', response.data.data.message);
      return { 
        message: response.data.data.message,
        address_id: response.data.data.user.mapped_wallet[0].address_id,
        access_token: response.data.data.access_token,
      };
    } else {
      throw new Error('Invalid registration response');
    }
  } catch (error) {
    console.error('Registration error:', error.response ? error.response.data : error.message);

    if (error.response?.status === 409 && error.response?.data?.message.includes("duplicate key value violates unique constraint")) {
      throw new Error('This email or username is already registered. Please use a different one.');
    }

    const message = error.response?.data?.message || 'Registration failed. Please check your details and try again.';
    throw new Error(message);
  }
};


const getWalletInfo = async (token) => {
  try {
    console.log("Fetching wallet info with token:", token);

    const response = await axios.post(API_WALLET_INFO, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });



    if (response.status >= 200 && response.status < 300) {
      return {
        wallet_info: response.data.data.wallet_info, // Assuming `wallet_info` is the returned data
        balance: response.data.data.balance, // Customize based on actual response structure
      };
    } else {
      throw new Error('Failed to retrieve wallet information');
    }
  } catch (error) {
    console.error('Error fetching wallet info:', error.response ? error.response.data : error.message);

    const message = error.response?.data?.message || 'Failed to fetch wallet information. Please try again later.';
    throw new Error(message);
  }
};
const createWallet = async (crypto_id, user_id, address_id) => {
  try {
    // Send a POST request to the API with the required data
    const response = await axios.post(API_WALLET_CREATE, {
      crypto_id: crypto_id,
      user_id: user_id,
      address_id: address_id,
    });

    // Check if the response status is 200 and if an access_token is returned in the data
    if (response.status === 200 && response.data.data.access_token) {
      console.log("Wallet created successfully:", response.data.data);
      
      // Return the relevant data
      return {
        wallet_id: response.data.data.wallet_id, 
        address: response.data.data.address,
        access_token: response.data.data.access_token
      };
    } else {
      throw new Error('Failed to create wallet. No access token returned.');
    }
  } catch (error) {
    // Log any errors and throw a user-friendly error message
    console.error('Error creating wallet:', error.response ? error.response.data : error.message);
    const message = error.response?.data?.message || 'Failed to create wallet. Please try again later.';
    throw new Error(message);
  }
};


export default { login, releas, getWalletInfo, createWallet };
