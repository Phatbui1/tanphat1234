import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../../src/assets/image_a.png";

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
        padding: '40px'
      }}>
        <img src={image} alt="image_a" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#18193E',
        color: '#FFFFFF',
        borderRadius: '40px'
      }}>
        <h1>Decentraized</h1>
        <p>SPL is a valuable token of a decentralized blockchain lottery platform</p>
       <button style={{
            backgroundColor: '#F9D54A',
            color: '#FFFFFF',
            border: 'none',
            padding: '15px 0',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '10px',
            width: '100%'
          }} onClick={handleGetStartedClick}>
            Get started
          </button>
      </div>
    </div>
  );
};

export default Guild2;