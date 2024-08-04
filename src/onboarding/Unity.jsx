import React from 'react';
import caution from '../assets/caution.png';
import tail from '../assets/tail.png';
import people1 from '../assets/people1.png';
import chest from '../assets/chest.png';
import Imagehome from '../assets/home.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import Trend from '../assets/Trend.png';

const Unity = () => {
  return (
    <div style={{
      background: '#090B2D',
      padding: '24px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      width: '100%',
      height: '100vh',  // Set the height to 100vh to fill the screen
      overflow: 'hidden',
    }}>
      <h1 style={{ 
        color: '#FFF',
        margin: '0',
        padding: '0',
        textAlign: 'center',
        width: '100%',
        marginBottom: '40px',
        fontSize: '32px',  // Adjust font size
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
      }}>Utilities</h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        width: '100%',
        maxWidth: '400px',  // Adjust max width to control layout
      }}>
        <button 
          style={{ 
            backgroundColor: '#6C7A92', 
            color: '#FFF', 
            border: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '8px',
            padding: '20px',
            borderRadius: '12px',
            cursor: 'pointer',
            lineHeight: 'normal',
            flex: '1 1 calc(50% - 20px)',
            boxSizing: 'border-box',
            maxWidth: 'calc(50% - 20px)',
            minWidth: '180px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#5A6A7B'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#6C7A92'}
        >
          <img src={caution} alt="caution" style={{ width: '28px', height: '28px' }} />
          Bug report
        </button>
        <button 
          style={{ 
            backgroundColor: '#6C7A92', 
            color: '#FFF', 
            border: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '8px',
            padding: '20px',
            borderRadius: '12px',
            cursor: 'pointer',
            lineHeight: 'normal',
            flex: '1 1 calc(50% - 20px)',
            boxSizing: 'border-box',
            maxWidth: 'calc(50% - 20px)',
            minWidth: '180px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#5A6A7B'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#6C7A92'}
        >
          <img src={tail} alt="tail" style={{ width: '28px', height: '28px' }} />
          Invitation contest
        </button>
        <button 
          style={{ 
            backgroundColor: '#6C7A92', 
            color: '#FFF', 
            border: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '8px',
            padding: '20px',
            borderRadius: '12px',
            cursor: 'pointer',
            lineHeight: 'normal',
            flex: '1 1 calc(50% - 20px)',
            boxSizing: 'border-box',
            maxWidth: 'calc(50% - 20px)',
            minWidth: '180px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#5A6A7B'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#6C7A92'}
        >
          <img src={people1} alt="people1" style={{ width: '28px', height: '28px' }} />
          Chat
        </button>
        <button 
          style={{ 
            backgroundColor: '#6C7A92', 
            color: '#FFF', 
            border: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '8px',
            padding: '20px',
            borderRadius: '12px',
            cursor: 'pointer',
            lineHeight: 'normal',
            flex: '1 1 calc(50% - 20px)',
            boxSizing: 'border-box',
            maxWidth: 'calc(50% - 20px)',
            minWidth: '180px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#5A6A7B'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#6C7A92'}
        >
          <img src={chest} alt="chest" style={{ width: '28px', height: '28px' }} />
          Mini Game
        </button>
      </div>

      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: 'auto',
      }}>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#FFF',
            border: 'none',
            padding: '12px',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={Imagehome} alt="home" style={{ width: '28px', height: '28px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#FFF',
            border: 'none',
            padding: '12px',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={ImageWallet} alt="Wallet" style={{ width: '28px', height: '28px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#FFF',
            border: 'none',
            padding: '12px',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={Imagecrown} alt="crown" style={{ width: '28px', height: '28px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#FFF',
            border: 'none',
            padding: '12px',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={Trend} alt="trend" style={{ width: '28px', height: '28px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#FFF',
            border: 'none',
            padding: '12px',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={crowna} alt="crowna" style={{ width: '28px', height: '28px' }} />
        </button>
      </div>
    </div>
  );
};

export default Unity;
