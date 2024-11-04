import axios from 'axios';

const API_URL = '/v1/auth/login'; // Đảm bảo rằng URL này là chính xác
const API_URL1 ='/v1/auth/register'
const API_URL2 ='/v1/wallet/info'
const API_URL3 ='/v1/wallet/create'
const login = async (email, password) => {
  try {
    // Gửi yêu cầu với đúng tham số
    const response = await axios.post(API_URL, {
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

    const response = await axios.post(API_URL1, {
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

    const response = await axios.post(API_URL2, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Full response from API:', response);
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);

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
const createWallet = async (token) => {
  try {
    console.log("Creating a new wallet with token:", token);

    const response = await axios.post('API_URL3', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Full response from API:', response);
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);

    if (response.status >= 200 && response.status < 300) {
      return {
        wallet_id: response.data.data.wallet_id, // Customize based on actual response structure
        address: response.data.data.address, // Customize based on actual response structure
      };
    } else {
      throw new Error('Failed to create a new wallet');
    }
  } catch (error) {
    console.error('Error creating wallet:', error.response ? error.response.data : error.message);

    const message = error.response?.data?.message || 'Failed to create wallet. Please try again later.';
    throw new Error(message);
  }
};

export default { login, releas, getWalletInfo, createWallet };
