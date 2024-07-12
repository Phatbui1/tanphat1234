import React from 'react';
import { FaUserFriends, FaRocket } from 'react-icons/fa'; // Import icons from 'react-icons/fa'
import { CiCirclePlus } from 'react-icons/ci';
import Image_C from '../assets/image_c.png';
import MiningBitcoinImage from '../assets/MiningBitcoin.png';
import ImageBank from '../assets/Bank.png';
import ImagePeople from '../assets/People.png'; // Corrected import statement for ImagePeople

const Home = () => {
  const handleGetStartedClick = () => {
    // Define what happens when the button is clicked
    console.log('Start to mine clicked');
  };

  const cryptoTokens = [
    {
      icon: <FaUserFriends style={{ color: '#FFD700', fontSize: '24px' }} />,
      name: 'Invite Friends',
      amount: '+0.05 SPL / Hr',
    },
    {
      icon: <FaRocket style={{ color: '#FFD700', fontSize: '24px' }} />,
      name: 'Booster',
      amount: 'Increase rewards: +20%',
    },
  ];

  return (
    <div
      style={{
        background: '#090B2F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Changed height to minHeight for responsiveness
        flexDirection: 'column',
        padding: '20px', // Added padding for spacing
        boxSizing: 'border-box', // Ensure padding is included in element size
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={Image_C}
          alt="image_c"
          style={{ maxWidth: '400px', maxHeight: '300px' }} // Adjust maxWidth and maxHeight as needed
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '16px', marginBottom: '8px' }}>Your Balance</h1>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
            24,095.68 <span style={{ fontSize: '16px', color: '#D1D5DB' }}>SPL</span>
          </p>
          <p
            style={{
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              backgroundColor: '#0C0F3F',
              padding: '4px 8px',
              borderRadius: '12px',
            }}
          >
            <CiCirclePlus style={{ marginRight: '4px' }} />+0.00525 SPL/h
          </p>
          <button
            style={{
              width: '100%', // Ensure equal width
              backgroundColor: '#F9D54A',
              color: '#000000',
              border: 'none',
              padding: '15px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '16px', // Add marginBottom to create space between button and selections
            }}
            onClick={handleGetStartedClick}
          >
            Start to mine
            <img
              src={MiningBitcoinImage}
              alt="Mining Bitcoin"
              style={{ width: '24px', height: '24px' }}
            />
          </button>
          {/* Render Invite and Booster tokens */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              width: '100%', // Ensure equal width
              maxWidth: '400px', // Limit max width for better presentation
            }}
          >
            {cryptoTokens.map((token, index) => (
              <button
                key={index}
                style={{
                  width: '100%', // Ensure equal width
                  backgroundColor: '#0C0F3F',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {token.icon}
                <span>{token.name}</span>
              </button>
            ))}
          </div>
          {/* Additional selections */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              width: '100%', // Ensure equal width
              maxWidth: '400px', // Limit max width for better presentation
              marginTop: '16px', // Add marginTop for spacing
            }}
          >
            <button
              style={{
                width: '100%', // Ensure equal width
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Airdrop 
              <img src={ImageBank} alt='Bank' style={{ width: '24px', height: '24px' }} />
            </button>
            <button
              style={{
                width: '100%', // Ensure equal width
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Team <img src={ImagePeople} alt='People' style={{ width: '24px', height: '24px' }} />
            </button>
            <button
              style={{
                width: '100%', // Ensure equal width
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Distributor
            </button>
          </div>
          {/* New additions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              width: '100%', // Ensure equal width
              maxWidth: '400px', // Limit max width for better presentation
              marginTop: '16px', // Add marginTop for spacing
            }}
          >
            <button
              style={{
                width: '100%', // Ensure equal width
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              LeaderBoard
            </button>
            <button
              style={{
                width: '100%', // Ensure equal width
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Utilities
            </button>
            <button
              style={{
                width: '100%', // Ensure equal width
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
