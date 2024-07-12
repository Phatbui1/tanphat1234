import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../../src/assets/image_b.png";

const Guild3 = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div style={{
      backgroundColor: '#090B2F',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'space-between',
      padding: '20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: '#1A1B3D',
        borderRadius: '40px',
        padding: '20px'
      }}>
        <img src={image} alt="image_b" style={{ maxWidth: '100%', height: 'auto' }} />
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
        marginTop: '20px'
      }}>
        <h1>Friendly Platform</h1>
        <p>Easy to use and build your own business</p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginTop: '20px',
          width: '100%'
        }}>
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
    </div>
  );
};

export default Guild3;
