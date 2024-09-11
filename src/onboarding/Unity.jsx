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
import { IoIosArrowRoundBack } from "react-icons/io";

const Unity = () => {
  const handleBackClick = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div style={{
      background: '#090B2D',
      padding: '24px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      width: '100%',
      height: '100vh',  // Set the height to 100vh to fill the screen
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        marginBottom: '40px',
      }}>
        <IoIosArrowRoundBack
          size={40}
          className='text-white'
          onClick={handleBackClick} // Add the back navigation handler here
          style={{
            cursor: 'pointer',
            position: 'absolute',
            left: '0px', // Position the back arrow on the left side
          }}
        />
        <h1 style={{
          color: '#FFF',
          margin: '10px',
          padding: '0',
          fontSize: '1em',  // Adjust font size
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          width: '100%', // Make the title take up the full width
          position: 'relative',
          marginLeft: '40px', // Adjust to avoid overlapping with the back arrow
          textAlign: 'center', // Center the text
        }}>
          Utilities
        </h1>

      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        width: '100%',
        maxWidth: '600px',  // Adjust max width to control layout
      }}>
        <button
          style={{
            backgroundColor: '#1C1F4A',
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
            backgroundColor: '#1C1F4A',
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
            backgroundColor: '#1C1F4A',
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
            backgroundColor: '#1C1F4A',
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
