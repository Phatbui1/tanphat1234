import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stacking = () => {
  const navigate = useNavigate();
  const [stakingAmount, setStakingAmount] = useState(1500);  // Default amount from image
  const availableBalance = 24095.68;  // Available balance from image
  const availableStaking = 150;  // From image
  const estimatedStakingRate = 125.1;  // From image

  const handleConfirm = () => {
    navigate('/stacking1');
  };

  const handleMaxClick = () => {
    setStakingAmount(availableBalance);  // Set the staking amount to the max balance
  };

  return (
    <div className="bg-[#090B2F] text-gray-200 p-4 rounded-lg shadow-md max-w-md mx-auto min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-white">Staking USDT</h1>
      <p className="mb-4 text-gray-300 text-center">
        Staking to become a development agent when the platform officially operates and receive more airdrops.
      </p>
      
      <div className="w-full">
        <h2 className="font-semibold text-white mb-2">Subscription Amount</h2> {/* Đổi thành màu trắng */}
        <div className="flex items-center justify-between bg-gray-700 p-2 rounded-lg mb-4">
          <input
            type="number"
            value={stakingAmount}
            onChange={(e) => setStakingAmount(e.target.value)}
            className="bg-transparent text-gray-200 outline-none w-full"
          />
          <span className="text-gray-400 mx-2">USDT</span>
          <button
            onClick={handleMaxClick}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Max
          </button>
        </div>

        <p className="text-gray-400 mb-4">
          Available Balance: <span className="font-semibold">{availableBalance.toFixed(2)} USDT</span>
        </p>
        
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <div className="flex justify-between">
            <p className="text-gray-300">Available staking</p>
            <p className="text-xl font-bold text-white text-right">{availableStaking}</p> {/* Đổi thành màu trắng */}
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-300">Total Est. Staking rate</p>
            <p className="text-xl font-bold text-yellow-400 text-right">{estimatedStakingRate}</p> {/* Đổi thành màu vàng */}
          </div>
        </div>

        <p className="text-gray-400 text-center text-xs mb-6">
          Please note that this amount is non-refundable over time.
        </p>

        <button
          onClick={handleConfirm}
          className="bg-yellow-300 text-black hover:bg-blue-500 w-full py-2 rounded mt-4"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Stacking;
