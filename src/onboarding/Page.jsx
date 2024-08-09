import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Spl from '../assets/Spl.png';
import homepoint from '../assets/homepoint.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import box from '../assets/box.png';
import Point from '../assets/Point.png';

function App() {
  const [selectedTab, setSelectedTab] = useState('staking');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleHomeClick = () => {
    navigate('/home'); // Navigate to Home page
  };

  const handleWalletClick = () => {
    navigate('/money'); // Navigate to Wallet page
  };

  const handleStakingClick = () => {
    navigate('/Stacking'); // Navigate to Stacking page
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
    },
    stakingInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    stakingItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px',
      backgroundColor: '#18193E',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    stakingText: {
      marginLeft: '10px',
      flex: '1',
    },
    stakingDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    tabs: {
      display: 'flex',
      marginTop: '20px',
    },
    tab: {
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '10px',
      marginRight: '10px',
      backgroundColor: '#090B2D',
      color: 'white',
    },
    activeTab: {
      backgroundColor: '#ff6b00',
    },
    noStaking: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      fontSize: '50px',
      marginBottom: '10px',
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

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.totalStakingValue}>Total staking value:</div>
        <div className='font-size-50px'>1,500 SPL</div>
      </header>

      <div style={styles.content}>
        {selectedTab === 'staking' ? (
          <div style={styles.stakingInfo}>
            <div style={styles.stakingItem}>
              <img src={Spl} alt="Spl" style={{ marginRight: '10px' }} />
              <span style={{ flex: 1 }}>SPL Superlott</span>
              <span className="text-green-400" style={{ flex: 1, textAlign: 'center' }}>ARP 10%</span>
              <span className='text-white' style={{ flex: 1, textAlign: 'right' }}>1,500 SPL</span>
            </div>
            <div style={styles.tabs}>
              <div
                style={selectedTab === 'staking' ? { ...styles.tab, ...styles.activeTab } : styles.tab}
                onClick={() => setSelectedTab('staking')}
              >
                Staking
              </div>
              <div
                style={selectedTab === 'order' ? { ...styles.tab, ...styles.activeTab } : styles.tab}
                onClick={() => setSelectedTab('order')}
              >
                Order
              </div>
            </div>
          </div>
        ) : (
          <div style={styles.noStaking}>
            <img src={box} alt='box'/>
            <div>You are not staking yet.</div>
            <div style={styles.tabs}>
              <div
                style={selectedTab === 'staking' ? { ...styles.tab, ...styles.activeTab } : styles.tab}
                onClick={() => setSelectedTab('staking')}
              >
                Staking
              </div>
              <div
                style={selectedTab === 'order' ? { ...styles.tab, ...styles.activeTab } : styles.tab}
                onClick={() => setSelectedTab('order')}
              >
                Order
              </div>
            </div>
          </div>
        )}
      </div>

      <footer style={styles.footer}>
        <button style={styles.footerButton} onClick={handleHomeClick}>
          <img src={homepoint} alt="homepoint" style={{ width: '24px', height: '24px' }} />
        </button>
        <button style={styles.footerButton} onClick={handleWalletClick}>
          <img src={ImageWallet} alt="Wallet" style={{ width: '24px', height: '24px' }} />
        </button>
        <button style={styles.footerButton}>
          <img src={Imagecrown} alt="crown" style={{ width: '24px', height: '24px' }} />
        </button>
        <button style={styles.footerButton}>
          <img src={Point} alt="Point" style={{ width: '24px', height: '24px' }} />
        </button>
        <button style={styles.footerButton}>
          <img src={crowna} alt="crowna" style={{ width: '24px', height: '24px' }} />
        </button>
      </footer>
    </div>
  );
}

export default App;
