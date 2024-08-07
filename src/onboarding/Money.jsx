import React from 'react';
import { useNavigate } from 'react-router-dom';
import bchImage from '../assets/bch.png';
import buyImage from '../assets/buy.png';
import plusImage from '../assets/plus.png';
import Imagehome from '../assets/home.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import Trend from '../assets/Trend.png';
import Crypto from '../assets/newitems/Crypto.png';
import Stocks from '../assets/newitems/Stocks.png';
import Gold from '../assets/newitems/Gold.png';

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
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
              }}
            >
              <img src={Crypto} alt="Crypto" style={{ width: '120px', height: '100px' }} />
            </button>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
              }}
            >
              <img src={Stocks} alt="Stocks" style={{ width: '125px', height: '100px' }} />
            </button>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
              }}
            >
              <img src={Gold} alt="Gold" style={{ width: '125px', height: '100px' }} />
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
                  <img src={bchImage} alt="bch" style={{ width: '24px', height: '24px' }} />
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
                  <img src={buyImage} alt="buy" style={{ width: '24px', height: '24px' }} />
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
                  <img src={plusImage} alt="plus" style={{ width: '24px', height: '24px' }} />
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
          backgroundColor: '#1C1F4A',
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
          <img src={Imagehome} alt="home" style={{ width: '24px', height: '24px' }} />
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
          <img src={Imagecrown} alt="crown" style={{ width: '24px', height: '24px' }} />
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
          <img src={Trend} alt="trend" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/profile')}
        >
          <img src={crowna} alt="crowna" style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
