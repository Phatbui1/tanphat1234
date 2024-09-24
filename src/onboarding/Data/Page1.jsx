import React from 'react';
import Spl from '../../assets/Spl.png';

const Page1 = () => {
  const containerStyle = {
    backgroundColor: '#090B2D',
    color: 'white',
    padding: '20px',
    minHeight: '100vh', // Ensure the container takes up the full height of the viewport
  };

  const amounts = ['1500SPL'];
  const APR = ['10%'];
  const Duration = ['6 months'];
  const interestEndDate = ['2024-06-22'];
  const totalEstReward = ['150SPL'];

  return (
    <div style={containerStyle}>
      <h1 className='text-center text-3xl font-bold mb-6'>Detail</h1>
      <p className='text-lg text-center mb-6'>Order Summary</p>
      <div className="flex items-start space-x-4 mb-6">
        <img src={Spl} alt="Spl" style={{ width: '60px', height: '60px' }} />
        <div className="flex flex-col w-full">
          <span className='text-2xl font-semibold mb-2'>SPL</span>
          <span className="text-gray-400 text-lg mb-4">superlottor</span>
          <div className="flex flex-col space-y-0">
            {amounts.map((amount, index) => (
              <div key={index} className="flex justify-between items-center text-lg">
                <span className="flex-grow text-left">Amount</span>
                <span>{amount}</span>
              </div>
            ))}
            {APR.map((apr, index) => (
              <div key={index} className="flex justify-between items-center text-lg">
                <span className="flex-grow text-left">APR</span>
                <span>{apr}</span>
              </div>
            ))}
            {Duration.map((duration, index) => (
              <div key={index} className="flex justify-between items-center text-lg">
                <span className="flex-grow text-left">Duration</span>
                <span>{duration}</span>
              </div>
            ))}
            {interestEndDate.map((date, index) => (
              <div key={index} className="flex justify-between items-center text-lg">
                <span className="flex-grow text-left">Interest End Date</span>
                <span>{date}</span>
              </div>
            ))}
            {totalEstReward.map((reward, index) => (
              <div key={index} className="flex justify-between items-center text-lg">
                <span className="flex-grow text-left">Total Estimated Reward</span>
                <span style={{ color: 'green' }}>{reward}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
