import React from 'react';
import anh from '../assets/anh.png';
import anh1 from '../assets/anh1.png';
import anh2 from '../assets/anh2.png';
import anh3 from '../assets/anh3.png';
import anh4 from '../assets/anh4.png';
import Imagehome from '../assets/home.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import Trend from '../assets/Trend.png';

const Unity1 = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#090B2F', // Background color
    color: 'white', // Text color
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  const headerStyle = {
    textAlign: 'center'
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const imgStyle = {
    marginRight: '20px',
    width: '100px', // Adjust the size as needed
    height: 'auto'
  };

  const textStyle = {
    fontSize: '16px'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: '20px',
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#090B2F'
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer'
  };

  const iconStyle = {
    width: '24px',
    height: '24px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Guide</h1>
      <div style={contentStyle}>
        <img src={anh} alt="anh" style={imgStyle} />
        <span style={textStyle}>Introduce the first Airdrop on Supperlotto</span>
      </div>
      <div style={contentStyle}>
        <img src={anh1} alt="anh1" style={imgStyle} />
        <span style={textStyle}>What is the Available Balance, Margin Balance, and Total Balance on Binance Futures</span>
      </div>
      <div style={contentStyle}>
        <img src={anh2} alt="anh2" style={imgStyle} />
        <span style={textStyle}>What is the Available Balance, Margin Balance, and Total Balance on Binance Futures</span>
      </div>
      <div style={contentStyle}>
        <img src={anh3} alt="anh3" style={imgStyle} />
        <span style={textStyle}>What is the Available Balance, Margin Balance, and Total Balance on Binance Futures</span>
      </div>
      <div style={contentStyle}>
        <img src={anh4} alt="anh4" style={imgStyle} />
        <span style={textStyle}>What is the Available Balance, Margin Balance, and Total Balance on Binance Futures</span>
      </div>
      <div style={navStyle}>
        <button style={buttonStyle}>
          <img src={Imagehome} alt="home" style={iconStyle} />
        </button>
        <button style={buttonStyle}>
          <img src={ImageWallet} alt="Wallet" style={iconStyle} />
        </button>
        <button style={buttonStyle}>
          <img src={Imagecrown} alt="crown" style={iconStyle} />
        </button>
        <button style={buttonStyle}>
          <img src={Trend} alt="trend" style={iconStyle} />
        </button>
        <button style={buttonStyle}>
          <img src={crowna} alt="crowna" style={iconStyle} />
        </button>
      </div>
    </div>
  );
}

export default Unity1;
