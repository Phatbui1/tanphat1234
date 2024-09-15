import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image_c from '../assets/image_c.png';
import home from '../assets/home.png';
import wup from '../assets/wup.png';
import vuongmieng from '../assets/vuongmieng.png';
import trendup from '../assets/trendup.png';
import usser from '../assets/usser.png';
import Mining from '../assets/rate/Mining.png';
import value from '../assets/rate/value.png';
import Rocket from '../assets/rate/Rocket.png';
import cash from '../assets/rate/cash.png';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const NavButton = ({ onClick, src, alt, style = {} }) => (
  <button
    style={{
      backgroundColor: 'transparent',
      color: 'white',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
      ...style,
    }}
    onClick={onClick}
  >
    <img src={src} alt={alt} style={{ width: '24px', height: '24px' }} />
  </button>
);

const RatePage = () => {
  const navigate = useNavigate();

  const [isBaseVisible, setBaseVisible] = useState(true);
  const [isStakingVisible, setStakingVisible] = useState(true);
  const [isBoostersVisible, setBoostersVisible] = useState(true);
  const [isRewardsVisible, setRewardsVisible] = useState(true);

  const handleHomeClick = () => navigate('/home');
  const handleWalletClick = () => navigate('/money');
  const handleStakingClick = () => navigate('/stacking');
  const handleRateClick = () => navigate('/page');
  const handleProfileClick = () => navigate('/user1');
  const handleEarnClick = () => navigate('/page');
  const handlePingInactiveClick = () => navigate('/team');

  return (
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundColor: '#090B2F', color: 'white' }}>
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4" style={{ backgroundColor: '#090B2F', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-sm">
            {/* Placeholder for logo or icon */}
          </div>
        </div>
      </header>

      {/* Total Rate Section */}
      <section className="relative w-full max-w-lg p-6 rounded-lg mt-4 shadow-lg text-center" style={{ backgroundColor: '#1C1F4A' }}>
        <img src={image_c} alt="image_c" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Total Rate</h1>
          <p className="text-4xl font-semibold text-white mb-4">0.06250 SPL/h</p>
          <div className="flex justify-around">
            <div className="flex flex-col items-center bg-blue-600 text-white p-2 rounded-md shadow-sm">
              <span className="font-bold">Base</span>
              <p className="mt-1 text-lg">0.0050</p>
            </div>
            <div className="flex flex-col items-center bg-orange-600 text-white p-2 rounded-md shadow-sm">
              <span className="font-bold">Staking</span>
              <p className="mt-1 text-lg">12.5</p>
            </div>
            <div className="flex flex-col items-center bg-purple-600 text-white p-2 rounded-md shadow-sm">
              <span className="font-bold">Boosters</span>
              <p className="mt-1 text-lg">100.00%</p>
            </div>
            <div className="flex flex-col items-center bg-green-600 text-white p-2 rounded-md shadow-sm">
              <span className="font-bold">Rewards</span>
              <p className="mt-1 text-lg">5.00</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      </section>

      {/* Rate Details Section */}
      <div className="w-full max-w-lg mt-6 space-y-4">
        {/* Base Card */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: '#1C1F4A' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center">
              <img src={Mining} alt="Mining" className="w-6 h-6 mr-2" />
              Base
            </h2>
            <button onClick={() => setBaseVisible(!isBaseVisible)} className="text-gray-400 hover:text-white">
              {isBaseVisible ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          {isBaseVisible && (
            <p className="text-sm mt-2 text-gray-400">
              This rate is dynamically calculated based on total reward for communication. Base rate will be halved every time the user increases more by 100,000.
            </p>
          )}
        </div>

        {/* Staking Card */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: '#1C1F4A' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center">
              <img src={value} alt="value" className="w-8 h-8 mr-4" />
              Staking
            </h2>
            <button onClick={() => setStakingVisible(!isStakingVisible)} className="text-gray-400 hover:text-white">
              {isStakingVisible ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          {isStakingVisible && (
            <div className="mt-2">
              <div className="flex justify-between mb-2">
                <p className="text-gray-400">Total Staking (USDT)</p>
                <p className="font-semibold">124.755</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-400">Available Staking</p>
                <p className="font-semibold">150</p>
              </div>
              <div className="flex justify-center mb-4">
                <button
                  className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-20 rounded-lg"
                  onClick={handleStakingClick}
                >
                  Staking
                </button>
              </div>
              <div className="text-sm text-gray-400">
                <p>α = 20</p>
                <p>β = 5</p>
                <p>Staking rate = (1 + Total Staking/α + β)</p>
                <p>
                  You can increase speed by staking. Staking to become a development agent when the platform officially operates and receive more airdrops.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Boosters Card */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: '#1C1F4A' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center">
              <img src={Rocket} alt="Rocket" className="w-6 h-6 mr-2" />
              Boosters
            </h2>
            <button onClick={() => setBoostersVisible(!isBoostersVisible)} className="text-gray-400 hover:text-white">
              {isBoostersVisible ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          {isBoostersVisible && (
            <div className="mt-2">
              <div className="flex">
                {/* Left column */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center mb-2">
                    <p className="text-gray-400">Timing</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-400">Community Circle</p>
                  </div>
                </div>
                {/* Right column */}
                <div className="flex-1 flex flex-col items-end">
                  <div className="flex items-center mb-2">
                    <p style={{ color: 'lightgreen', display: 'flex', alignItems: 'center' }}>
                      0 <span style={{ marginLeft: '5px', color: 'lightgreen' }}>⏱️</span> 00:00
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p>0 × 20% = 0.00%</p>
                  </div>
                </div>
              </div>
              <div className="text-sm mt-4 text-gray-400">
                <span className="text-[#917EF1] block">Booster = (1+Community Circle)</span>
                <p>Increase reward when moving to Community meeting point and click boost</p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-yellow-400 hover:bg-blue-400 text-black py-2 px-20 rounded-lg"
                  onClick={handleEarnClick}
                >
                  Boosters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Rewards Card */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: '#1C1F4A' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center text-white">
              <img src={cash} alt="cash" className="w-8 h-8 mr-4" />
              Rewards
            </h2>
            <button onClick={() => setRewardsVisible(!isRewardsVisible)} className="text-gray-400 hover:text-white">
              {isRewardsVisible ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          {isRewardsVisible && (
            <div className="text-sm mt-2 text-gray-400">
              <div className="flex justify-between">
                <p>Pioneer</p>
                <p>5.00</p>
              </div>
              <div className="flex justify-between">
                <p>Referral Team</p>
                <p>16 × 0.25 = 4</p>
              </div>
              <div className="mt-4 flex justify-center space-x-2">
                <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600">Invite More</button>
                <button className="bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400" onClick={handlePingInactiveClick}>
                  Ping Inactive
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full fixed bottom-0 py-4" style={{ backgroundColor: '#090B2F' }}>
        <div className="flex justify-around">
          <button
            onClick={() => navigate('/home')}
            style={{
              backgroundColor: '#090B2F',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            <img src={home} alt="home" style={{ width: '24px', height: '24px' }} />
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
            <img src={wup} alt="wup" style={{ width: '24px', height: '24px' }} />
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
            <img src={vuongmieng} alt="vuongmieng" style={{ width: '24px', height: '24px' }} />
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
            <img src={trendup} alt="trendup" style={{ width: '24px', height: '24px' }} />
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
            <img src={usser} alt="usser" style={{ width: '24px', height: '24px' }} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default RatePage;
