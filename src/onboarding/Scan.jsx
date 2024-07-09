import React from 'react';
import RectangleImage from '../assets/Rectangle.png';
import { AiOutlinePicture } from "react-icons/ai";

const Scan = () => {
  return (
    <div style={{ 
      backgroundColor: '#090B2F', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <h1 style={{ color: 'white' }}>SCAN QR CODE</h1>
      <img src={RectangleImage} alt="Rectangle" />
      <p style={{color: 'white'}}>place QR code With the frame to scan</p>

      <div style={{
        width: '40px',
        height: '40px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid white',
        borderRadius: '50%',
        opacity: 0.5
      }}>
        <AiOutlinePicture className='text-white' style={{ color: '#FFFFFF' }} />
        
      </div>
      <p className='text-white'>upload QR code</p>
    </div>
  );
}

export default Scan;