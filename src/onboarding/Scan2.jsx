import React, { useState } from 'react';
import FrameImage from "../../src/assets/Frame.png";

const Scan2 = () => {
  const [network, setNetwork] = useState('');
  const [address, setAddress] = useState('');

  const handleNetworkChange = (e) => {
    setNetwork(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Network:', network);
    console.log('Address:', address);
  };

  const handleSaveImage = () => {
    // Add your save image logic here
    console.log('Save Image clicked');
  };

  const handleShare = () => {
    // Add your share logic here
    console.log('Share clicked');
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#14163E',
    borderRadius: '10px',
    padding: '10px 15px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '500px',
    justifyContent: 'space-between',
  };

  const inputStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#FFFFFF',
    fontSize: '16px',
    width: '100%',
  };

  const labelStyle = {
    color: '#BBBBBB',
    fontSize: '14px',
    marginBottom: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#FBBF24', // Yellow color for the buttons
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px', // Border radius for all corners
    width: '158.5px', // Fixed width
    height: '46px', // Fixed height
    padding: '14px 30px', // Padding
    fontSize: '16px',
    cursor: 'pointer',
    opacity: 1, // Fully visible
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px', // Gap between buttons
    marginTop: '20px',
  };

  return (
    <div style={{
      backgroundColor: '#090B2F',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1 style={{ color: 'white' }}>Deposit USTD</h1>
      <p style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        Please, make sure you deposit via the <span style={{ color: '#FFFF00' }}>
          "Smart chain Network (BEP20)" network.
        </span>
        Otherwise the funds may be lost
      </p>
      <div>
        <img src={FrameImage} alt='Frame' />
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={inputContainerStyle}>
          <div style={{ width: '100%' }}>
            <div style={labelStyle}>Your receiving address</div>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your address"
              style={inputStyle}
            />
          </div>
          <button style={{ marginLeft: '10px', backgroundColor: '#1F1F1F', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
          </button>
        </div>
        <div style={inputContainerStyle}>
          <div style={{ width: '100%' }}>
            <div style={labelStyle}>Network</div>
            <input
              type="text"
              id="network"
              value={network}
              onChange={handleNetworkChange}
              placeholder="Enter your network"
              style={inputStyle}
            />
          </div>
          <button style={{ marginLeft: '10px', backgroundColor: '#1F1F1F', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
          </button>
        </div>
        <div style={containerStyle}>
          <button type="button" style={buttonStyle} onClick={handleSaveImage}>Save Image</button>
          <button type="button" style={buttonStyle} onClick={handleShare}>Share</button>
        </div>
      </form>
    </div>
  );
};

export default Scan2;
