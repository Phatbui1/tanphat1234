const API_WALLET_INFO = HOST + VERSION + '/wallet/info'
const API_WALLET_CREATE = HOST + VERSION + '/wallet/create'

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
  export default { getWalletInfo, createWallet };