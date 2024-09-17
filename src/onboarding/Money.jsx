import React from 'react';
import { useNavigate } from 'react-router-dom';
import bchImage from '../assets/bch.png';
import buyImage from '../assets/buy.png';
import Imagehome from '../assets/home.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import Trend from '../assets/Trend.png';
import Okcash from '../assets/logo/Okcash.png';
import clock from '../assets/newitems/clock.png';
import len from '../assets/newitems/len.png';
import xuong from '../assets/newitems/xuong.png';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: '#090B2F',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Header Section with SPL Total */}
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <div
          style={{
            backgroundColor: '#1C1F4A',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '16px', marginBottom: '8px' }}>Total SPL</h2>
          <div
            style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}
          >
            16,128.80 <span style={{ fontSize: '16px', color: '#D1D5DB' }}>SPL</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button
              style={{
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: '1px solid #1C1F4A',
                borderRadius: '8px',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
              onClick={() => navigate('/deposit')} // Navigate to Deposit page
            >
              <img src={xuong} alt="Deposit" style={{ width: '35px', height: '30px' }} />
              <span>Deposit</span>
            </button>
            <button
              style={{
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: '1px solid #1C1F4A',
                borderRadius: '8px',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <img src={len} alt="Withdraw" style={{ width: '30px', height: '30px' }} />
              <span>Withdraw</span>
            </button>
            <button
              style={{
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: '1px solid #1C1F4A',
                borderRadius: '8px',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
               
              }}
              onClick={() => navigate('/history')}
            >
              <img src={clock} alt="History" style={{ width: '35px', height: '30px' }} />
              <span>History</span>
            </button>
          </div>
        </div>

        {/* Balance Section */}
        <div
          style={{
            backgroundColor: '#1C1F4A',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            color: 'white',
          }}
        >
          <h2 style={{ fontSize: '16px', marginBottom: '8px' }}>Balance</h2>

          <div
            style={{
              backgroundColor: '#0C0F3F',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    backgroundColor: '#f0b429',
                    padding: '8px',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                >
                  <img src={bchImage} alt="BCH" style={{ width: '24px', height: '24px' }} />
                </div>
                <div>Owner</div>
              </div>
              <div>0 SPL</div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#0C0F3F',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    backgroundColor: '#f0b429',
                    padding: '8px',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                >
                  <img src={buyImage} alt="Reward" style={{ width: '24px', height: '24px' }} />
                </div>
                <div>Reward</div>
              </div>
              <div>0 SPL</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#0C0F3F', borderRadius: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>Verified</div>
              <div>0 SPL</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '8px',
              }}
            >
              <div>Unverified</div>
              <div>0 SPL</div>
            </div>
          </div>
        </div>

        {/* Your Assets Section */}
        <div
          style={{
            backgroundColor: '#1C1F4A',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            color: 'white',
          }}
        >
          <h2 style={{ fontSize: '16px', marginBottom: '8px' }}>Your Assets</h2>
          <p style={{ color: 'yellow' }}>Token unlock rules</p>
          <div
            style={{
              backgroundColor: '#0C0F3F',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '8px',
                    borderRadius: '30%',
                    marginRight: '8px',
                  }}
                >
                  <img src={Okcash} alt="Okcash" style={{ width: '24px', height: '24px' }} />
                </div>
                <div>
                  <div>SPL</div>
                  <div style={{ fontSize: '12px', color: '#D1D5DB' }}>Superlott</div>
                </div>
              </div>
              <div>16,128.05</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#0C0F3F', borderRadius: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    backgroundColor: '#10B981',
                    padding: '8px',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                >
                  {/* Icon for USDT */}
                </div>
                <div>
                  <div>USDT</div>
                  <div style={{ fontSize: '12px', color: '#D1D5DB' }}>Tether</div>
                </div>
              </div>
              <div>112.51</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#090B2F',
          borderRadius: '12px',
          padding: '10px 0',
          position: 'fixed',
          bottom: '20px',
        }}
      >
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/home')}
        >
          <img src={Imagehome} alt="Home" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/money')}
        >
          <img src={ImageWallet} alt="Wallet" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/select')}
        >
          <img src={Imagecrown} alt="Crown" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/page')}
        >
          <img src={Trend} alt="Trend" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/user1')}
        >
          <img src={crowna} alt="Crowna" style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
