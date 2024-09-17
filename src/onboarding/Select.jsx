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
      padding: '6px',
      cursor: 'pointer',
      ...style,
    }}
    onClick={onClick}
  >
    <img src={src} alt={alt} style={{ width: '18px', height: '18px' }} />
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
      <header className="w-full flex items-center justify-between p-3" style={{ backgroundColor: '#090B2F', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="flex items-center space-x-1">
          <div className="bg-blue-500 rounded-full h-7 w-7 flex items-center justify-center text-xs">
            {/* Placeholder for logo or icon */}
          </div>
        </div>
      </header>

      {/* Total Rate Section */}
      <section className="relative w-full max-w-md p-3 rounded-lg mt-3 shadow-lg text-center" style={{ backgroundColor: '#1C1F4A' }}>
        <img src={image_c} alt="image_c" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="relative z-10">
          <h1 className="text-xl font-bold mb-1">Total Rate</h1>
          <p className="text-2xl font-semibold text-white mb-2">0.06250 SPL/h</p>
          <div className="flex flex-wrap justify-around gap-3">
            <div className="flex flex-col items-center bg-blue-600 text-white p-1 rounded-md shadow-sm">
              <span className="font-bold text-xs">Base</span>
              <p className="mt-1 text-md">0.0050</p>
            </div>
            <div className="flex flex-col items-center bg-orange-600 text-white p-1 rounded-md shadow-sm">
              <span className="font-bold text-xs">Staking</span>
              <p className="mt-1 text-md">12.5</p>
            </div>
            <div className="flex flex-col items-center bg-purple-600 text-white p-1 rounded-md shadow-sm">
              <span className="font-bold text-xs">Boosters</span>
              <p className="mt-1 text-md">100.00%</p>
            </div>
            <div className="flex flex-col items-center bg-green-600 text-white p-1 rounded-md shadow-sm">
              <span className="font-bold text-xs">Rewards</span>
              <p className="mt-1 text-md">5.00</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      </section>

      {/* Rate Details Section */}
      <div className="w-full max-w-md mt-4 space-y-3">
        {/* Base Card */}
        <div className="p-3 rounded-lg shadow-md" style={{ backgroundColor: '#1C1F4A' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold flex items-center">
              <img src={Mining} alt="Mining" className="w-5 h-5 mr-1" />
              Base
            </h2>
            <button onClick={() => setBaseVisible(!isBaseVisible)} className="text-gray-400 hover:text-white">
              {isBaseVisible ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
          </div>
          {isBaseVisible && (
            <p className="text-xs mt-1 text-gray-400">
              This rate is dynamically calculated based on total reward for communication. Base rate will be halved every time the user increases more by 100,000.
            </p>
          )}
        </div>

        {/* Staking Card */}
        <div className="p-3 rounded-lg shadow-md" style={{ backgroundColor: '#1C1F4A' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold flex items-center">
              <img src={value} alt="value" className="w-6 h-6 mr-2" />
              Staking
            </h2>
            <button onClick={() => setStakingVisible(!isStakingVisible)} className="text-gray-400 hover:text-white">
              {isStakingVisible ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
          </div>
          {isStakingVisible && (
            <div className="mt-1">
              <div className="flex justify-between mb-1">
                <p className="text-gray-400 text-xs">Total Staking (USDT)</p>
                <p className="font-semibold text-xs">124.755</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-400 text-xs">Available Staking</p>
                <p className="font-semibold text-xs">150</p>
              </div>
              <div className="flex justify-center mb-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-20 rounded-lg text-sm" // Increased padding and font size
                  onClick={handleStakingClick}
                >
                  Staking
                </button>
              </div>
              <div className="text-xs text-gray-400">
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
        <div className="p-3 rounded-lg shadow-md" style={{ backgroundColor: '#1C1F4A' }}>
          <div className="flex items-center justify-between ">
            <h2 className="text-md font-semibold flex items-center">
              <img src={Rocket} alt="Rocket" className="w-5 h-5 mr-1 " />
              Boosters
            </h2>
            <button onClick={() => setBoostersVisible(!isBoostersVisible)} className="text-gray-400 hover:text-white">
              {isBoostersVisible ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
          </div>
          {isBoostersVisible && (
            <div className="mt-1">
              <div className="flex flex-wrap">
                {/* Left column */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center mb-1">
                    <p className="text-gray-400 text-xs">Timing</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-400 text-xs">Community Circle</p>
                  </div>
                </div>
                {/* Right column */}
                <div className="flex-1 flex flex-col items-end">
                  <div className="flex items-center mb-1">
                    <p style={{ color: 'lightgreen', display: 'flex', alignItems: 'center' }} className="text-xs">
                      0 <span style={{ marginLeft: '3px', color: 'lightgreen' }}>⏱️</span> 00:00
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs">0 × 20% = 0.00%</p>
                  </div>
                </div>
              </div>
              <div className="text-xs mt-2 text-gray-400">
                <span className="text-[#917EF1] block">Booster = (1+Community Circle)</span>
                <p>Increase reward when moving to Community meeting point and click boost</p>
              </div>
              <div className="flex justify-center mt-2">
                <button
                  className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-20 rounded-lg text-sm" // Increased padding and font size
                  onClick={handleEarnClick}
                >
                  Boosters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Rewards Card */}
        <div className="p-3 rounded-lg shadow-md" style={{ backgroundColor: '#1C1F4A' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold flex items-center text-white">
              <img src={cash} alt="cash" className="w-6 h-6 mr-2" />
              Rewards
            </h2>
            <button onClick={() => setRewardsVisible(!isRewardsVisible)} className="text-gray-400 hover:text-white">
              {isRewardsVisible ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
          </div>
          {isRewardsVisible && (
            <div className="text-xs mt-1 text-gray-400">
              <div className="flex justify-between mb-1">
                <p className="text-xs">Pioneer</p>
                <p className="font-semibold text-xs">5.00</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-xs">Referral Team</p>
                <p className="font-semibold text-xs">16 × 0.25 = 4</p>
              </div>
              <div className="mt-2 flex justify-center space-x-1">
                <button className="bg-gray-700 text-white py-2 px-5 rounded-md hover:bg-gray-600 text-sm"> {/* Increased padding and font size */}
                  Invite More
                </button>
                <button className="bg-yellow-500 text-black py-2 px-5 rounded-md hover:bg-yellow-400 text-sm" onClick={handlePingInactiveClick}>
                  Ping Inactive
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full fixed bottom-0  py-2" style={{ backgroundColor: '#090B2F' }}>
        <div className="flex justify-around">
          <NavButton onClick={handleHomeClick} src={home} alt="home" />
          <NavButton onClick={handleWalletClick} src={wup} alt="wup" />
          <NavButton src={vuongmieng} alt="vuongmieng" />
          <NavButton onClick={handleRateClick} src={trendup} alt="trendup" />
          <NavButton onClick={handleProfileClick} src={usser} alt="usser" />
        </div>
      </footer>
    </div>
  );
};

export default RatePage;
