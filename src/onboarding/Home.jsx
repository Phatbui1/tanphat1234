import React from 'react';
import { FaUserFriends, FaRocket } from 'react-icons/fa';
import { CiCirclePlus } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai'; // Only import the needed icon
import Image_C from '../assets/image_c.png';
import MiningBitcoinImage from '../assets/MiningBitcoin.png';
import ImageBank from '../assets/Bank.png';
import ImagePeople from '../assets/People.png';
import ImagePercent from '../assets/Percent.png';
import ImageBanka from '../assets/Banka.png';
import ImageShield from '../assets/Shield.png';
import ImageHeadphone from '../assets/Headphone.png';
import Imagehome from '../assets/home.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import Trend from '../assets/Trend.png'
const Home = () => {
  const handleGetStartedClick = () => {
    console.log('Start to mine clicked');
  };

  const cryptoTokens = [
    {
      icon: <FaUserFriends style={{ color: '#FFD700', fontSize: '24px' }} />,
      name: 'Invite Friends',
      amount: '+0.05 SPL / Hr',
    },
    {
      icon: <FaRocket style={{ color: '#FFD700', fontSize: '24px' }} />,
      name: 'Booster',
      amount: 'Increase rewards: +20%',
    },
  ];

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
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
        </div>
        <div
          style={{
            backgroundColor: '#1C1F4A',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            position: 'relative',
          }}
        >
          <img
            src={Image_C}
            alt="image_c"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              opacity: 0.2,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: '16px', marginBottom: '8px', color: 'white' }}>Your Balance</h1>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px', color: 'white' }}>
              24,095.68 <span style={{ fontSize: '16px', color: '#D1D5DB' }}>SPL</span>
            </p>
            <p
              style={{
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                backgroundColor: '#0C0F3F',
                padding: '4px 8px',
                borderRadius: '12px',
              }}
            >
              <CiCirclePlus style={{ marginRight: '4px' }} />+0.00525 SPL/h
            </p>
            <button
              style={{
                width: '100%',
                backgroundColor: '#F9D54A',
                color: '#000000',
                border: 'none',
                padding: '15px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
              onClick={handleGetStartedClick}
            >
              Start to mine
              <img
                src={MiningBitcoinImage}
                alt="Mining Bitcoin"
                style={{ width: '24px', height: '24px' }}
              />
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#1C1F4A',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {cryptoTokens.map((token, index) => (
              <button
                key={index}
                style={{
                  width: '100%',
                  backgroundColor: '#0C0F3F',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {token.icon}
                <span>{token.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <button
            style={{
              flex: '1 1 calc(33% - 10px)',
              backgroundColor: '#0C0F3F',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            Airdrop
            <img src={ImageBank} alt="Bank" style={{ width: '24px', height: '24px' }} />
          </button>
          <button
            style={{
              flex: '1 1 calc(33% - 10px)',
              backgroundColor: '#0C0F3F',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            Team
            <img src={ImagePeople} alt="People" style={{ width: '24px', height: '24px' }} />
          </button>
          <button
            style={{
              flex: '1 1 calc(33% - 10px)',
              backgroundColor: '#0C0F3F',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            Distributor
            <img src={ImagePercent} alt="Percent" style={{ width: '24px', height: '24px' }} />
          </button>
          <button
            style={{
              flex: '1 1 calc(33% - 10px)',
              backgroundColor: '#0C0F3F',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            LeaderBoard
            <img src={ImageBanka} alt="Banka" style={{ width: '24px', height: '24px' }} />
          </button>
          <button
            style={{
              flex: '1 1 calc(33% - 10px)',
              backgroundColor: '#0C0F3F',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            Utilities
            <img src={ImageShield} alt="Shield" style={{ width: '24px', height: '24px' }} />
          </button>
          <button
            style={{
              flex: '1 1 calc(33% - 10px)',
              backgroundColor: '#0C0F3F',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            Support
            <img src={ImageHeadphone} alt="Headphone" style={{ width: '24px', height: '24px' }} />
          </button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: '400px',
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

export default Home;
