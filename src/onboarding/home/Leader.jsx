import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';

const Leader = () => {
  const [activeTab, setActiveTab] = useState('distributer');

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
      <li key={item.rank} style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '12px 16px', borderBottom: '1px solid #333', 
        borderRadius: '8px', backgroundColor: '#1C1F4A', marginBottom: '8px'
      }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {item.rank === 1 && <img src={one} alt="1st place" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
          {item.rank === 2 && <img src={two} alt="2nd place" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
          {item.rank === 3 && <img src={three} alt="3rd place" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
          {item.rank > 3 && <span style={{ color: '#FFF', marginRight: '8px' }}>{item.rank}.</span>}
        </span>
        <span style={{ flex: 1, color: '#FFF', textAlign: 'left' }}>{item.name}</span>
        <span style={{ color: '#FFF' }}>{item.score}</span>
      </li>
    ))
  );

  const handleBackClick = () => {
    // Implement navigation logic here, e.g., using react-router
    window.history.back();
  };

  return (
    <div style={{ backgroundColor: '#090B2D', color: '#ffffff', minHeight: '100vh', margin: 0, padding: '0 0 60px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
        <IoIosArrowRoundBack 
          size={50} 
          className='text-white' 
          onClick={handleBackClick} 
          style={{ cursor: 'pointer', position: 'absolute', left: '16px' }} 
        />
        <h1 style={{ 
          color: '#FFF',
          margin: '20px',
          padding: '10px',
          textAlign: 'center',
          width: '100%',
          fontSize: '1.5em',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}>
          Leaderboard
        </h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <button
          style={{
            padding: '10px 50px',
            borderRadius: '12px 0 0 12px',
            backgroundColor: activeTab === 'leaderSPL' ? '#FFD700' : '#1C1F4A',
            color: activeTab === 'leaderSPL' ? '#333' : '#666',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => setActiveTab('leaderSPL')}
        >
          Leader SPL
        </button>
        <button
          style={{
            padding: '10px 50px',
            borderRadius: '0 12px 12px 0',
            backgroundColor: activeTab === 'distributer' ? '#FFD700' : '#1C1F4A',
            color: activeTab === 'distributer' ? '#333' : '#666',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => setActiveTab('distributer')}
        >
          Distributer
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {activeTab === 'leaderSPL' ? renderList(leaderSPLData) : renderList(distributerData)}
      </ul>
      <div style={{ position: 'fixed', bottom: '0', width: '100%', backgroundColor: '#090B2D', display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
      </div>
    </div>
  );
};

export default Leader;
