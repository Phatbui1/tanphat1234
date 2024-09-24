import React from 'react';
import image_coin from '../../assets/image_coin.png';
import box from '../../assets/box.png';

const Airdrop1 = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(to bottom, #000000, #434343)', // Black linear gradient
      height: '100vh', // Ensure it covers the full viewport height
      display: 'flex', // Flexbox for centering content
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'gray', // Ensure text is white for contrast
      textAlign: 'center'
    }}>
      <img src={image_coin} alt="image_coin" className="mb-4" />
      <img src={box} alt="box" className="mb-4" />
      <span>There aren't any airdrops now</span>
    </div>
  );
}

export default Airdrop1;
