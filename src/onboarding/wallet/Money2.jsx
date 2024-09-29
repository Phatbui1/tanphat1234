import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
const Money2 = () => {
  const [address, setAddress] = useState('');
  const [network, setNetwork] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNetworkChange = (event) => {
    setNetwork(event.target.value);
  };

  const handleWithdrawalAmountChange = (event) => {
    setWithdrawalAmount(event.target.value);
  };
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  // Placeholder for available balance
 const availableBalance = 112.51; // Replace with actual available balance
  const networkFee = 100; // Fixed network fee
  const amountReceived = 111.51; // Fixed amount received


  const handleWithdraw = () => {
    // Logic for withdrawal goes here
    console.log('Withdraw button clicked');
    // Implement your withdrawal logic here
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
      <div style={{ maxWidth: '335px', width: '100%' }}>
        <h1 style={{ color: '#FFFFFF', textAlign: 'center' }}>Withdraw USDT</h1>
        <IoIosArrowRoundBack />
        {/* Address Input */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="address" style={{ color: '#FFFFFF' }}>Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
            style={inputStyle}
          />
        </div>
        
        {/* Network Input */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="network" style={{ color: '#FFFFFF' }}>Network:</label>
          <input
            type="text"
            id="network"
            value={network}
            onChange={handleNetworkChange}
            placeholder="Enter your network"
            style={inputStyle}
          />
          <p style={{ color: '#FFFFFF', marginTop: '10px', textAlign: 'center' }}>
            Please enter the correct wallet address on the <span style={{ color: '#F6E05E' }}>Smart Chain Network (BEP20)</span>. Entering the wrong address can result in loss of funds.
          </p>
        </div>
        
        {/* Withdrawal Amount Input */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="withdrawalAmount" style={{ color: '#FFFFFF' }}>Withdrawal Amount:</label>
          <input
            type="text"
            id="withdrawalAmount"
            value={withdrawalAmount}
            onChange={handleWithdrawalAmountChange}
            placeholder="Enter amount"
            style={inputStyle}
          />
        </div>
        
        {/* Available Balance */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <p style={{ color: '#FFFFFF', marginBottom: '5px' }}>Available:</p>
          <p style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold' }}>{availableBalance} USDT</p>
        </div>

        {/* Network Fee and Amount Received */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <p style={{ color: '#FFFFFF' }}>Network Fee:</p>
          <p style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{networkFee} USDT</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <p style={{ color: '#FFFFFF' }}>Amount Received:</p>
          <p style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{amountReceived} USDT</p>
        </div>

        {/* Withdraw Button */}
        <button
          style={{
            width: '335px',
            height: '52px',
            backgroundColor: '#F6E05E',
            color: '#000000',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '24px',
            opacity: '0.8'
          }}
          onClick={handleWithdraw}
        >
          Withdraw
          
        </button>
        
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  height: '48px',
  padding: '12px 20px',
  borderRadius: '12px',
  border: 'none',
  backgroundColor: '#FFFFFF',
  color: '#090B2F',
  fontSize: '16px'
};

export default Money2;
