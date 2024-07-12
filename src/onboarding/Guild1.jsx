import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../../src/assets/mining_bitcoin.png";

const Guild1 = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/guild2');
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
        <img src={image} alt="mining_bitcoin" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#18193E',
        color: '#FFFFFF',
        borderRadius: '40px',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: '20px',
        marginRight: '20px'
      }}>
        <div> <h1>Fairly</h1>
        <p>Allow you to access and grow your SPL holding and buy lottery ticket in the fairest way on the blockchain platform</p>
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

export default Guild1;