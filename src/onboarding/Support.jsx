import React from 'react';
import Imagehome from '../assets/home.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import Trend from '../assets/Trend.png';

const Support = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#090B2F',
    color: 'white'
  };

  const contentStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const headerStyle = {
    fontSize: '50px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px' // Adjust this value to control the distance from the bottom
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headerStyle}>Support</h1>
        <span>
          If you have any comments relating to our app or the service we provide, let us know by email <span style={{ color: 'yellow' }}>support@superlott.io</span>
        </span>
        <button className="mt-4 bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-400">Get support</button>
      </div>
      
      <div style={buttonContainerStyle}>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <img src={Imagehome} alt="home" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <img src={ImageWallet} alt="Wallet" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <img src={Imagecrown} alt="crown" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <img src={Trend} alt="trend" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <img src={crowna} alt="crowna" style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    </div>
  );
}

export default Support;
