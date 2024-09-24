import React, { useState } from 'react';
import image from '../../assets/Group.png';

const Guild5 = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Perform the necessary actions, such as sending the email
      // You can add your own logic here
      console.log('Email sent!');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative my-4">
        <div
          style={{
            backgroundColor: '#090B2F',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <img src={image} alt="Group.png" />
          <p className="text-white text-center mt-4">
            An email has been sent to your email address. Please follow the instructions to reset your password. Check your spam folder if you don't receive the email.
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`mt-4 w-full md:w-auto text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
                loading ? 'bg-gray-500 hover:bg-gray-600' : 'bg-yellow-500 hover:bg-yellow-700'
              }`}
            >
              {loading ? 'Sending...' : 'Open Mail'}
            </button>
          </div>
          <div className="text-white font-bold py-2 px-4 rounded mt-2 text-center">
            <p>
              Haven't received it yet? <span className="text-yellow-500 font-bold">Resend Mail</span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Guild5;
