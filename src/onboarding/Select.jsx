import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FiStar, FiPieChart, FiLayers, FiGift } from 'react-icons/fi'; // Using React Icons for icons
import image_c from '../assets/image_c.png';
import home from '../assets/home.png';
import wup from '../assets/wup.png';
import vuongmieng from '../assets/vuongmieng.png';
import trendup from '../assets/trendup.png';
import usser from '../assets/usser.png';

const RatePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStakingClick = () => {
    navigate('/stacking'); // Navigate to Stacking page
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4 bg-gray-800 shadow-md">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-sm">
            {/* Placeholder for logo or icon */}
          </div>
        </div>
      </header>

      {/* Total Rate Section */}
      <section className="relative bg-gray-800 w-full max-w-lg p-6 rounded-lg mt-4 shadow-lg text-center">
        {/* Background Image */}
        <img src={image_c} alt="image_c" className="absolute inset-0 w-full h-full object-cover rounded-lg" />

        {/* Overlay */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Total Rate</h1>
          <p className="text-4xl font-semibold text-white mb-4">0.06250 SPL/h</p>

          {/* Card with Gradient Background and Rounded Corners */}
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

        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      </section>

      {/* Rate Details Section */}
      <div className="w-full max-w-lg mt-6 space-y-4">
        {/* Base Card */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold flex items-center">
            <FiStar className="mr-2" /> Base
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            This rate is dynamically calculated based on total reward for communication. Base rate will be halved every time the user increases more by 100,000.
          </p>
        </div>

        {/* Staking Card */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold flex items-center">
            <FiPieChart className="mr-2" /> Staking
          </h2>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-gray-400">Total Staking (USDT)</p>
              <p>124.755</p>
            </div>
            <div>
              <p className="text-gray-400">Available Staking</p>
              <p>150</p>
            </div>
          </div>
          <button
            onClick={handleStakingClick} // Add click handler
            className="bg-yellow-600 hover:bg-yellow-500 text-white py-1 px-4 rounded mt-2"
          >
            Staking
          </button>
          <div className="mt-4 text-sm text-gray-400">
            <p>α = 20</p>
            <p>β = 5</p>
            <p>Staking rate = (1 + Total Staking/α + β)</p>
            <p>
              You can increase speed by staking. Staking to become a development agent when the platform officially operates and receive more airdrops.
            </p>
          </div>
        </div>

        {/* Boosters Card */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold flex items-center">
            <FiLayers className="mr-2" /> Boosters
          </h2>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-gray-400">Timing</p>
              <p>Community Circle</p>
            </div>
            <div>
              <p className="text-gray-400">D × 20% - 0.00%</p>
              <button className="bg-green-600 hover:bg-green-500 text-white py-1 px-4 rounded">
                Boost
              </button>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>Booster = (1 + Community Circle)</p>
            <p>Increase rewards when moving to community meeting point and clicking boost!</p>
          </div>
        </div>

        {/* Rewards Card */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold flex items-center">
            <FiGift className="mr-2" /> Rewards
          </h2>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-gray-400">Pioneer</p>
              <p>5.00</p>
            </div>
            <div>
              <p className="text-gray-400">Referral Team</p>
              <p>16 × 0.25 = 4</p>
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <button className="bg-purple-600 hover:bg-purple-500 text-white py-1 px-4 rounded">
              Invite More
            </button>
            <button className="bg-red-600 hover:bg-red-500 text-white py-1 px-4 rounded">
              Ping Inactive
            </button>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="w-full bg-gray-800 py-4 mt-6">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-gray-400 hover:text-white">
            <img src={home} alt="home" />
            <span className="text-sm mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-white">
            <img src={wup} alt='wup' />
            <span className="text-sm mt-1">Wallet</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-white">
            <img src={vuongmieng} alt="vuongmieng" />
            <span className="text-sm mt-1">Rate</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-white">
            <img src={trendup} alt='trendup' />
            <span className="text-sm mt-1">Earn</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-white">
            <img src={usser} alt='usser' />
            <span className="text-sm mt-1">Profile</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default RatePage;
