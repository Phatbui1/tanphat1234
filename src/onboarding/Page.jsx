import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spl from '../assets/Spl.png';
import homee from '../assets/money/homee.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import box from '../assets/box.png';
import Point from '../assets/Point.png';

function App() {
  const [selectedTab, setSelectedTab] = useState('staking');
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const styles = {
    app: {
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      backgroundColor: '#18193E',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      position: 'relative',
    },
    header: {
      textAlign: 'center',
      width: '100%',
      padding: '10px',
      backgroundColor: '#090B2D',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    totalStakingValue: {
      fontSize: '18px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#090B2D',
      borderRadius: '10px',
      flex: '1',
      padding: '10px',
    },
    stakingInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      marginTop: '20px',
    },
    stakingItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px',
      backgroundColor: '#18193E',
      borderRadius: '10px',
      marginTop: '10px',
    },
    tabs: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
      marginBottom: '20px',
      backgroundColor: '#18193E',
      borderRadius: '10px',
      padding: '5px',
    },
    tab: {
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '10px', // Bo tròn cả hai đầu của tab
      backgroundColor: '#090B2D',
      color: 'white',
      flex: '1',
      textAlign: 'center',
      margin: '5px',
      transition: 'background-color 0.3s, color 0.3s',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: add shadow for better visual effect
    },
    activeTab: {
      backgroundColor: '#ffcc00',
      color: '#000',
    },
    noStaking: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      padding: '10px',
      backgroundColor: '#18193E',
      borderRadius: '10px',
      position: 'absolute',
      bottom: '0',
    },
    footerButton: {
      backgroundColor: 'transparent',
      color: 'white',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#333';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = e.target.classList.contains('active') ? '#ffcc00' : '#090B2D';
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.totalStakingValue}>Total staking value:</div>
        <div style={{ fontSize: '50px' }}>1,500 SPL</div>
      </header>

      <div style={styles.content}>
        <div style={styles.tabs}>
          <div
            style={selectedTab === 'staking' ? { ...styles.tab, ...styles.activeTab } : styles.tab}
            className={selectedTab === 'staking' ? 'active' : ''}
            onClick={() => setSelectedTab('staking')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Staking
          </div>
          <div
            style={selectedTab === 'order' ? { ...styles.tab, ...styles.activeTab } : styles.tab}
            className={selectedTab === 'order' ? 'active' : ''}
            onClick={() => setSelectedTab('order')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Order
          </div>
        </div>

        {selectedTab === 'staking' ? (
          <div style={styles.stakingInfo}>
            <div style={styles.stakingItem}>
              <img src={Spl} alt="Spl" style={{ marginRight: '10px' }} />
              <span style={{ flex: 1 }}>SPL Superlott</span>
              <span style={{ flex: 1, textAlign: 'center', color: 'green' }}>ARP 10%</span>
              <span style={{ flex: 1, textAlign: 'right' }}>1,500 SPL</span>
            </div>
          </div>
        ) : (
          <div style={styles.noStaking}>
            <img src={box} alt="box" />
            <div>You are not staking yet.</div>
          </div>
        )}
      </div>

      <footer style={styles.footer}>
        <button style={styles.footerButton} onClick={() => handleNavigation('/home')}>
          <img src={homee} alt="homee" style={{ width: '24px', height: '24px' }} />
        </button>
        <button style={styles.footerButton} onClick={() => handleNavigation('/money')}>
          <img src={ImageWallet} alt="Wallet" style={{ width: '24px', height: '24px' }} />
        </button>
        <button style={styles.footerButton} onClick={() => handleNavigation('/select')}>
          <img src={Imagecrown} alt="crown" style={{ width: '24px', height: '24px' }} />
        </button>
        <button style={styles.footerButton}>
          <img src={Point} alt="Point" style={{ width: '24px', height: '24px' }} />
        </button>
        <button style={styles.footerButton} onClick={() => navigate('/user1')}>
          <img src={crowna} alt="crowna" style={{ width: '24px', height: '24px' }} />
        </button>
      </footer>
    </div>
  );
}

export default App;
