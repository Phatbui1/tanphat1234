import React from 'react';
import Imagehome from '../../assets/home.png';
import ImageWallet from '../../assets/Wallet.png';
import Imagecrown from '../../assets/crown.png';
import crowna from '../../assets/crowna.png';
import Trend from '../../assets/Trend.png';

const Support1 = () => {
  return (
    <div
      style={{
        backgroundColor: '#090B2F',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 16px',
      }}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Distributor</h1>
        <div className="space-y-4 mb-4">
          <div
            contentEditable
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
              backgroundColor: '#e2e2e2',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              position: 'relative',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: '500', color: '#888' }}>Verified Member</span>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#000',
                marginLeft: '8px',
              }}
            >
              4
            </span>
          </div>
          <div
            contentEditable
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
              backgroundColor: '#e2e2e2',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              position: 'relative',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: '500', color: '#888' }}>Stacking Rate</span>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#000',
                marginLeft: '8px',
              }}
            >
              4.25
            </span>
          </div>
          <span className='text-white text-center'>
            Become a distributor and receive more attractive reward opportunities to launch your business and increase your own income. Mainnet and airdrop of distributor are waiting for you.
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              width: '200px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
            className="hover:bg-yellow-400"
          >
            Active
          </button>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-200 pt-4">
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
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
        >
          <img src={crowna} alt="crowna" style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    </div>
  );
};

export default Support1;
