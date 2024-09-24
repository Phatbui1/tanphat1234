import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../../assets/image_a.png";

const Guild2 = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/guild3');
  };

  return (
    <div style={{
      backgroundColor: '#090B2F',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: '#1A1B3D',
        padding: '20px',
        borderBottom: '1px solid #2D2E5F'
      }}>
        <img src={image} alt="image_a" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#18193E',
        color: '#FFFFFF',
        borderRadius: '20px',
        margin: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{ margin: '0', fontSize: '2rem', fontWeight: 'bold' }}>Decentralized</h1>
        <p style={{ margin: '10px 0', fontSize: '1rem', lineHeight: '1.5' }}>
          SPL is a valuable token of a decentralized blockchain lottery platform.
        </p>
        <button style={{
          backgroundColor: '#F9D54A',
          color: '#090B2F',
          border: 'none',
          padding: '15px 25px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '10px',
          marginTop: '20px',
          transition: 'background-color 0.3s ease',
          width: '100%',
          maxWidth: '300px'
        }} onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Guild2;
