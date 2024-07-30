import React from 'react';

const Stacking = () => {
  return (
    <div className="bg-blue-950 text-gray-200 p-4 rounded-lg shadow-md max-w-md mx-auto min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-white">Staking USDT</h1>
      <p className="mb-4 text-gray-300">
        Staking to become a development agent when the platform officially operates and receive more airdrops.
      </p>
      <h2 className="font-semibold text-green-300">Subscription Amount</h2>
      <div className="flex items-center justify-between bg-gray-700 p-2 rounded-lg mb-4">
        <span className="text-gray-400">Minimum 1 USDT</span>
        <button className="bg-green-500 text-white px-2 py-1 rounded">USDT</button>
        <span className='text-yellow-400'>Max</span>
      </div>

      <p className="text-gray-400">
        Available Balance: <span className="font-semibold">24,095.68 USDT</span>
      </p>

      <div className="bg-gray-700 p-4 rounded-lg mb-4">
        <p className="text-gray-300">Available staking</p>
        <p className="text-xl font-bold text-yellow-400">150</p>
        <p className="text-gray-300">Total Est. Staking rate</p>
        <p className="text-xl font-bold text-red-400">--</p>
      </div>

      <p className="text-gray-400">
        Please note that this amount is non-refundable over time.
      </p>

      <button className="bg-yellow-300 text-black hover:bg-blue-500 w-full py-2 rounded mt-4">
        Confirm
      </button>
    </div>
  );
};

export default Stacking;
