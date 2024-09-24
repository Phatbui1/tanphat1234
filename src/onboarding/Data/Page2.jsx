import React, { useState } from 'react';
import Spl from '../../assets/Spl.png';

const Page2 = () => {
  const [inputValue, setInputValue] = useState(''); // State for input value

  // Define styles for elements
  const containerStyle = {
    backgroundColor: '#090B2D',
    color: 'white',
    padding: '40px 20px', // Increase padding for better spacing
    minHeight: '100vh',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#8C91A2',
    border: 'none',
    color: 'white',
    padding: '12px 24px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '8px', // More rounded corners
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#6E747F',
  };

  const confirmButtonStyle = {
    backgroundColor: '#FFD700', // Gold color for the button
    border: 'none',
    color: '#090B2D',
    padding: '12px 24px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '18px',
    margin: '20px 0',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow for depth
  };

  const confirmButtonHoverStyle = {
    backgroundColor: '#FFC107', // Slightly darker gold on hover
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Increase shadow on hover
  };

  const placeholderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items to be spaced evenly
    gap: '10px',
    padding: '10px 20px',
    width: '100%', // Full width of container
    maxWidth: '360px',
    margin: '20px auto',
    backgroundColor: '#8C91A2',
    borderRadius: '8px',
    color: '#FFFFFF',
    textAlign: 'center',
    border: 'none',
  };

  const inputStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
    textAlign: 'center',
    flex: '1', // Allow input to expand
    fontSize: '16px',
    padding: '8px',
  };

  const maxTextStyle = {
    color: '#FFD700', // Gold color for 'Max'
  };

  const imageStyle = {
    width: '28px',
    height: '28px',
  };

  const availableBalanceStyle = {
    marginTop: '30px',
    fontSize: '18px',
    color: '#B0B0B0',
  };

  const balanceInputStyle = {
    border: 'none',
    backgroundColor: '#8C91A2',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '120px',
    marginTop: '10px',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h1>Stacking SPL</h1>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>Duration (Months & APR)</p>
      <div>
        <button
          style={buttonStyle}
          onMouseOver={({ currentTarget }) => (currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={({ currentTarget }) => (currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          12 Months
        </button>
        <button
          style={buttonStyle}
          onMouseOver={({ currentTarget }) => (currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={({ currentTarget }) => (currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          16 Months
        </button>
        <button
          style={buttonStyle}
          onMouseOver={({ currentTarget }) => (currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={({ currentTarget }) => (currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          18 Months
        </button>
      </div>
      <div style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '22px', fontWeight: 'bold', margin: '10px 0' }}>EST. APR</p>
        <p style={{ fontSize: '18px', color: '#B0B0B0' }}>Subscription Amount</p>
        <div style={placeholderContainerStyle}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Minimum"
            style={inputStyle}
          />
          <span>SPL <span style={maxTextStyle}>Max</span></span>
          <img src={Spl} alt='Spl' style={imageStyle} />
        </div>
        <div style={availableBalanceStyle}>
          <p>Avaliable Balance: <span style={{ color: 'white' }}>24,095.68 SPL</span></p>
          <div style={placeholderContainerStyle}>
            <input
              type="text"
              placeholder="Total Est. Reward"
              style={balanceInputStyle}
            />
            <span style={{ color: 'green', marginLeft: 'auto' }}>0.0 SPL</span>
          </div>
          <div style={placeholderContainerStyle}>
            <input
              type="text"
              placeholder="Interest End Date"
              style={balanceInputStyle}
            />
            <span style={{ color: 'white', marginLeft: 'auto' }}>2024-04-02</span>
          </div>
          <button
            style={confirmButtonStyle}
            onMouseOver={({ currentTarget }) => {
              currentTarget.style.backgroundColor = confirmButtonHoverStyle.backgroundColor;
              currentTarget.style.boxShadow = confirmButtonHoverStyle.boxShadow;
            }}
            onMouseOut={({ currentTarget }) => {
              currentTarget.style.backgroundColor = confirmButtonStyle.backgroundColor;
              currentTarget.style.boxShadow = confirmButtonStyle.boxShadow;
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
