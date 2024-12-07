const API_RATE_INFO = HOST + VERSION + '/rate/info'; // Assuming this is the correct endpoint

const getRateInfo = async (token) => {
  try {
    console.log("Starting to fetch rate info...");
    console.log("Using token:", token); // Log the token being used

    // Send a POST request with the Authorization header
    const response = await axios.post(API_RATE_INFO, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Log the full response for debugging
    console.log("Response received:", response);

    // Check if the response status is in the success range
    if (response.status >= 200 && response.status < 300) {
      // Log the data extracted from the response
      console.log("Successfully fetched rate info");
      console.log("Rate info:", response.data.data.rate_info);
      console.log("Current rate:", response.data.data.current_rate);

      // Assuming `rate_info` and `current_rate` are part of the response data
      return {
        rate_info: response.data.data.rate_info, // Customize based on actual response structure
        current_rate: response.data.data.current_rate, // Assuming current_rate is part of the response
      };
    } else {
      console.error("Error: Unexpected response status:", response.status);
      throw new Error('Failed to retrieve rate information');
    }
  } catch (error) {
    console.error('Error fetching rate info:', error.response ? error.response.data : error.message);

    // Customize the error message if it’s available in the response
    const message = error.response?.data?.message || 'Failed to fetch rate information. Please try again later.';
    
    // Log the error message for debugging
    console.error("Error details:", message);

    throw new Error(message);
  }
};
export default { getRateInfo };