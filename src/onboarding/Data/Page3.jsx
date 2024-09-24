import React from 'react';
import Group from '../../assets/Group.png';
const Page3 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6" style={{ backgroundColor: '#090B2D' }}>
      <div className="mb-4">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
          <img src={Group} alt="Group" />
        </div>
      </div>
      <h2 className="text-lg font-semibold text-white mb-2">Congratulations, you are now earning interest on your crypto</h2>
      <div className="w-full border rounded-lg p-4" style={{ borderColor: '#8C91A2' }}>
        <div className="flex justify-between text-gray-400 mb-2">
          <span>Amount</span>
          <span>1,500 SPL</span>
        </div>
        <div className="flex justify-between text-gray-400 mb-2">
          <span>APR</span>
          <span>10%</span>
        </div>
        <div className="flex justify-between text-gray-400 mb-2">
          <span>Duration</span>
          <span>6 months</span>
        </div>
        <div className="flex justify-between text-gray-400 mb-2">
          <span>Interest End Date</span>
          <span>2024-06-22</span>
        </div>
        <div className="flex justify-between text-gray-400 mb-2">
          <span>Total Est. Rewards</span>
          <span>150 SPL</span>
        </div>
      </div>
      <button className="mt-4 bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-400">
        Back to Earn
      </button>
    </div>
  );
};

export default Page3;
