import React from 'react'
import image from "../../src/assets/image_b.png"

const Guild3 = () => {
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
        <h1>Friendly platom</h1>
        <p>Easy to use end build your own business</p>
        <button style={{
          backgroundColor: '#F9D54A',
          color: '#FFFFFF',
          border: '2px solid #F9D54A',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
          borderRadius: '20px'
        }}>
            Get Started
        </button>
      </div>
    </div>
  )
}

export default Guild3