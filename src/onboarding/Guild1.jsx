import React from 'react';
import image from "../../src/assets/mining_bitcoin.png";

const Guild1 = () => {
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
        borderRadius: '40px 40px 0px 0px'
      }}>
        <h1>Fairly</h1>
        <p>Allow you to access and grow your SPL holding and buy lottery ticket</p>
        <button style={{
          backgroundColor: '#F9D54A',
          color: '#FFFFFF',
          border: '2px solid #F9D54A',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
          borderRadius: '12px',
          width: '311px',
          height: '51px'
        }}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Guild1;