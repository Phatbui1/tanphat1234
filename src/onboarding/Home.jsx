import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiCirclePlus } from 'react-icons/ci';
import MiningBitcoinImage from '../assets/MiningBitcoin.png';
import Image_C from '../assets/image_c.png';
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
import Trend from '../assets/Trend.png';
import team from '../assets/friends/team.png'; // Invite Friends
import buy from '../assets/friends/buy.png';
import user from '../assets/newitems/user.png';

const Home = () => {
  const [isMining, setIsMining] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [buttonColor, setButtonColor] = useState('#F9D54A');
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    if (!isMining) {
      setIsMining(true);
      setRemainingTime(8 * 60 * 60 * 1000); // 8 hours
      setButtonColor('#464664');
    }
  };

  useEffect(() => {
    let timer;
    if (isMining && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (remainingTime <= 0) {
      setIsMining(false);
      setRemainingTime(0);
      setButtonColor('#F9D54A');
    }

    return () => clearInterval(timer);
  }, [isMining, remainingTime]);

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const cryptoTokens = [
    {
      icon: <img src={team} alt="team" style={{ width: '24px', height: '24px' }} />, // Invite Friends
      name: 'Invite Friends',
      amount: '+0.05 SPL / Hr',
      additionalInfo: '', // Add additional info here if needed
    },
    {
      icon: <img src={buy} alt="buy" style={{ width: '24px', height: '24px' }} />,
      name: 'Booster',
      amount: 'Increase rewards: +20%',
      additionalInfo: '', // Add additional info here if needed
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
            backgroundColor: '#1C1F4A',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            position: 'relative',
          }}
        >
          <img
            src={Image_C}
            alt="Your Balance Background"
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
            <h1 className='text-center' style={{ fontSize: '16px', marginBottom: '8px', color: 'white' }}>Your Balance</h1>
            <p className='text-center' style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px', color: 'white' }}>
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
            <div className='text-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <p style={{ margin: 0 }}>0/0</p>
              <img src={user} alt="user" style={{ marginLeft: '10px' }} /> {/* Sử dụng biến team ở đây */}
            </div>

            <button
              style={{
                width: '100%',
                backgroundColor: buttonColor,
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
              disabled={isMining}
            >
              {isMining ? `Comeback in ${formatTime(remainingTime)}` : 'Start to mine'}
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
              flexDirection: 'column', // Stack vertically
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
                  alignItems: 'center', // Center items vertically
                  gap: '12px', // Adjust gap for better spacing
                  height: '50px', // Ensure all buttons have the same height
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {token.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{token.name}</span>
                  <span>{token.amount}</span>
                  {token.additionalInfo && <span>{token.additionalInfo}</span>}
                </div>
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
            zIndex: 2, // Ensure buttons are not obscured
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
              gap: '12px', // Ensure consistent spacing
              height: '50px',
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
              gap: '12px',
              height: '50px',
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
              gap: '12px',
              height: '50px',
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
              gap: '12px',
              height: '50px',
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
              gap: '12px',
              height: '50px',
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
              gap: '12px',
              height: '50px',
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
        >
          <img src={crowna} alt="crowna" style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    </div>
  );
};

export default Home;
