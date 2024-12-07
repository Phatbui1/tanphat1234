import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiCirclePlus } from 'react-icons/ci';
import { FaBars, FaBell } from 'react-icons/fa';
import MiningBitcoinImage from '../../assets/MiningBitcoin.png';
import Image_C from '../../assets/image_c.png';
import ImageBank from '../../assets/Bank.png';
import ImagePeople from '../../assets/People.png';
import ImagePercent from '../../assets/Percent.png';
import ImageBanka from '../../assets/Banka.png';
import ImageShield from '../../assets/Shield.png';
import ImageHeadphone from '../../assets/Headphone.png';
import Imagehome from '../../assets/home.png';
import ImageWallet from '../../assets/Wallet.png';
import Imagecrown from '../../assets/crown.png';
import crowna from '../../assets/crowna.png';
import Trend from '../../assets/Trend.png';
import team from '../../assets/friends/team.png';
import buy from '../../assets/friends/buy.png';
import user from '../../assets/newitems/user.png';

const Home = () => {
  const [isMining, setIsMining] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [buttonColor, setButtonColor] = useState('#F9D54A');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    if (!isMining) {
      setIsMining(true);
      setRemainingTime(8 * 60 * 60 * 1000); // 8 hours
      setButtonColor('#464664');
    }
  };

  const handleNotificationClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInviteFriendsClick = () => {
    navigate('/select'); // Navigate to select friends page
  };

  const handleBoosterClick = () => {
    navigate('/select'); // Navigate to select booster page
  };

  const handleLeaderboardClick = () => {
    navigate('/leader'); // Navigate to leaderboard page
  };

  const handleMenuClick = () => {
    navigate('/unity'); // Navigate to unity page
  };

  const [token, setToken] = useState(null);

  useEffect(() => {
    // Retrieve token from localStorage once
    const storedToken = localStorage.getItem('token');
    console.log('Retrieved token:', storedToken);

    if (!storedToken) {
      console.log('No token found. Redirecting to login.');
      navigate('/login'); 
    } else {
      setToken(storedToken);
    }
  }, [navigate]); // Include navigate in dependencies

  useEffect(() => {
    if (token) {
      getWalletInfo(token); // Gọi API với token đã lưu
    }
  }, [token]);

  const getWalletInfo = (token) => {
    // Perform API call with token
    console.log('Fetching wallet info with token:', token);
    // Add your API call logic here
  };
  useEffect (()=>{
    if(token){
      createWallet(token);
    }
  },[token]);
 const createWallet = (token) =>{
  console.log('createWallet with token:',token);
 }
  useEffect(() => {
    let timer; // Declare timer variable

    if (isMining && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (remainingTime <= 0) {
      setIsMining(false);
      setRemainingTime(0);
      setButtonColor('#F9D54A');
    }

    return () => clearInterval(timer); // Clean up timer on component unmount
  }, [isMining, remainingTime]);

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const cryptoTokens = [
    {
      icon: <img src={team} alt="team" style={{ width: '24px', height: '24px' }} />,
      name: 'Invite Friends',
      amount: '+0.05 SPL / Hr',
      onClick: handleInviteFriendsClick,
    },
    {
      icon: <img src={buy} alt="buy" style={{ width: '24px', height: '24px' }} />,
      name: 'Booster',
      amount: 'Increase rewards: +20%',
      onClick: handleBoosterClick,
    },
  ];

  const actionButtons = [
    { icon: ImageBank, label: 'Airdrop' },
    { icon: ImagePeople, label: 'Team', onClick: () => navigate('/team') },
    { icon: ImagePercent, label: 'Distributor' },
    { icon: ImageBanka, label: 'LeaderBoard', onClick: handleLeaderboardClick },
    { icon: ImageShield, label: 'Utilities', onClick: handleMenuClick }, // Added onClick handler for Utilities
    { icon: ImageHeadphone, label: 'Support' },
  ];

  return (
    <div
      style={{
        background: '#090B2F',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Header Section */}
      <header
        style={{
          width: '100%',
          maxWidth: '360px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
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
          onClick={handleMenuClick} // Add the navigation handler here
        >
          <FaBars size={24} />
        </button>
        <h1 style={{ color: 'white', fontSize: '18px' }}>Home</h1>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={handleNotificationClick}
        >
          <FaBell size={24} />
        </button>
      </header>

      <div style={{ width: '100%', maxWidth: '360px' }}>
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
            <p style={{ color: 'white', textAlign: 'center', marginTop: '5px' }}>
              ID Address: 0x1234567890abcdef
            </p>
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
              <p style={{ margin: 10 }}>0/0</p>
              <img src={user} alt="user" style={{ marginLeft: '10px' }} />
            </div>

            <button
              style={{
                width: '100%',
                backgroundColor: buttonColor,
                color: '#000000',
                border: 'none',
                padding: '10px 25px',
                fontSize: '18px',
                cursor: 'pointer',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                marginBottom: '16px',
              }}
              onClick={handleGetStartedClick}
              disabled={isMining}
            >
              {isMining ? `Comeback in ${formatTime(remainingTime)}` : 'Start to mine'}
              <img
                src={MiningBitcoinImage}
                alt="Mining Bitcoin"
                style={{ width: '20px', height: '20px' }}
              />
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#1C1F4A',
            borderRadius: '12px',
            padding: '10px',
            marginBottom: '20px',
          }}
        >
          {cryptoTokens.map((token, index) => (
            <button
              key={index}
              style={{
                width: '100%',
                height: '60px',
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'left',
                fontSize: '14px',
                marginBottom: '10px',
              }}
              onClick={token.onClick}
            >
              <div style={{ flexShrink: 0 }}>
                {token.icon}
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ display: 'block', fontSize: '12px' }}>{token.name}</span>
                <span style={{ display: 'block', fontSize: '10px' }}>{token.amount}</span>
              </div>
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          {actionButtons.map((button, index) => (
            <button
              key={index}
              style={{
                backgroundColor: '#0C0F3F',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textAlign: 'center',
                fontSize: '12px',
                padding: '10px',
                boxSizing: 'border-box',
              }}
              onClick={button.onClick}
            >
              <img src={button.icon} alt={button.label} style={{ width: '24px', height: '24px' }} />
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full fixed bottom-0 py-4" style={{ backgroundColor: '#090B2F' }}>
        <div className="flex justify-around">
          <button
            style={{
              backgroundColor: '#090B2F',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            <img src={Imagehome} alt="home" style={{ width: '24px', height: '24px' }} />
          </button>
          <button
            onClick={() => navigate('/money')}
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
            onClick={() => navigate('/select')}
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
            onClick={() => navigate('/page')}
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
            onClick={() => navigate('/user1')}
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
      </footer>

      {/* Modal component */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: '#1C1F4A',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white',
            maxWidth: '300px',
            width: '100%',
          }}>
            <p>Inactive member of your Team have been notified!</p>
            <button
              onClick={handleModalButtonClick}
              style={{
                backgroundColor: '#F9D54A',
                color: '#000000',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '8px',
                marginTop: '20px',
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
