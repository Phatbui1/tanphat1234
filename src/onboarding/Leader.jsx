import React, { useState } from 'react';
import Imagehome from '../assets/home.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import Trend from '../assets/Trend.png';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';

const Leader = () => {
  const [activeTab, setActiveTab] = useState('leaderSPL');

  const leaderSPLData = [
    { rank: 1, name: '@hawking', score: '68,215,892 SPL' },
    { rank: 2, name: '@courtney', score: '65,215,892 SPL' },
    { rank: 3, name: '@eduardo', score: '60,215,892 SPL' },
    { rank: 4, name: '@farrell', score: '58,215,892 SPL' },
    { rank: 5, name: '@kyle', score: '57,215,892 SPL' },
    { rank: 6, name: '@mitchell', score: '54,215,892 SPL' },
    { rank: 7, name: '@haven', score: '50,215,892 SPL' },
    { rank: 8, name: '@philip', score: '47,215,892 SPL' },
    { rank: 9, name: '@esther', score: '45,215,892 SPL' },
  ];

  const distributerData = [
    { rank: 1, name: '@hawking', score: '5,685.17' },
    { rank: 2, name: '@courtney', score: '2,168.82' },
    { rank: 3, name: '@eduardo', score: '915.67' },
    { rank: 4, name: '@farrell', score: '434.23' },
    { rank: 5, name: '@kyle', score: '366.95' },
    { rank: 6, name: '@mitchell', score: '291.04' },
    { rank: 7, name: '@haven', score: '222.58' },
    { rank: 8, name: '@philip', score: '132.66' },
    { rank: 9, name: '@esther', score: '129.99' },
  ];

  const renderList = (data) => (
    data.map((item) => (
      <li key={item.rank} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #333' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {item.rank === 1 && <img src={one} alt="1st place" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
          {item.rank === 2 && <img src={two} alt="2nd place" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
          {item.rank === 3 && <img src={three} alt="3rd place" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
          {item.rank > 3 && <span style={{ color: '#FFF' }}>{item.rank}.</span>}
        </span>
        <span style={{ flex: 1, color: '#FFF', textAlign: 'left' }}>{item.name}</span>
        <span style={{ color: '#FFF' }}>{item.score}</span>
      </li>
    ))
  );

  return (
    <div style={{ backgroundColor: '#090B2D', color: '#ffffff', minHeight: '100vh', margin: 0, padding: '0 0 60px 0' }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px', color: '#FFF' }} className='text-center'>Leaderboard</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
        <button
          style={{ 
            padding: '4px 12px', 
            borderRadius: '8px', 
            backgroundColor: activeTab === 'leaderSPL' ? '#FFD700' : '#D3D3D3', 
            color: activeTab === 'leaderSPL' ? '#333' : '#666', 
            border: 'none', 
            cursor: 'pointer' 
          }}
          onClick={() => setActiveTab('leaderSPL')}
        >
          Leader SPL
        </button>
        <button
          style={{ 
            padding: '4px 12px', 
            borderRadius: '8px', 
            backgroundColor: activeTab === 'distributer' ? '#FFD700' : '#D3D3D3', 
            color: activeTab === 'distributer' ? '#333' : '#666', 
            border: 'none', 
            cursor: 'pointer', 
            marginLeft: '4px' 
          }}
          onClick={() => setActiveTab('distributer')}
        >
          Distributer
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, overflow: 'hidden' }}>
        {activeTab === 'leaderSPL' ? renderList(leaderSPLData) : renderList(distributerData)}
      </ul>
      <div style={{ position: 'fixed', bottom: '0', width: '100%', backgroundColor: '#090B2D', display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
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

export default Leader;
