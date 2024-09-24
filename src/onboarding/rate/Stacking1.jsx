// Stacking1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Stacking1 = () => {
  const navigate = useNavigate();

  const handleBackToRate = () => {
    navigate('/select');
  };

  return (
    <div style={{ backgroundColor: '#18193E' }} className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Staking USDT</h1>

      <div className="relative w-24 h-24 mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
            <img alt="checkmark" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-300 rounded-full w-24 h-24 animate-ping"></div>
        </div>
      </div>
      
      <p className="text-center text-muted-foreground mb-2 text-white">Congratulations, you are now increasing the staking rate</p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm text-center">
        <div className="mb-4">
          <p className="text-sm text-gray-400">Amount</p>
          <p className="text-2xl font-bold text-white">1,500 USDT</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Total Est. Staking rate</p>
          <p className="text-2xl font-bold text-yellow-300">125.1</p>
        </div>
      </div>

      <button onClick={handleBackToRate} className="bg-yellow-400 text-black hover:bg-yellow-300 mt-4 p-2 rounded-lg w-full max-w-xs">
        Back to Rate
      </button>
    </div>
  );
};

export default Stacking1;
