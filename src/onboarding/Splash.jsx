import React from 'react'
import image from '../../src/assets/image.png'
import { Link } from 'react-router-dom';
const Splash = () => {
  return (
    <div style={{ 
      backgroundColor: '#090B2F', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
        <img src={image} alt="Splash Image" />
         <Link to="/guild1">Go to Guild1</Link>
    </div>
  )
}

export default Splash