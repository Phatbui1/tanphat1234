import React from 'react';

const Money1 = () => {
  // Example data representing different crypto tokens
  const cryptoTokens = [
    { name: 'SPL', fullName: 'Superlott', amount: '16,128.05' },
    { name: 'BTC', fullName: 'Bitcoin', amount: '0.05' },
    { name: 'ETH', fullName: 'Ethereum', amount: '0.575' },
    { name: 'USTD', fullName: 'USD', amount: '112.51' }
    // Add more tokens as needed
  ];

  return (
    <div style={{
      backgroundColor: '#090B2F',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      padding: '20px' // Added padding for spacing
    }}>
      <div>
        <h1 className='text-white flex items-center'>Select Crypto</h1>
      </div>
      <div style={{ marginTop: '20px' }}> {/* Added margin-top for spacing */}
        <input
          type="text"
          placeholder="Search"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#1A1D2E',
            color: '#FFFFFF'
          }}
        />
      </div>
      <div>
        <div className="text-yellow-400 text-sm mb-2">Token unlock rules</div>
        {cryptoTokens.map((token, index) => (
          <div key={index} className="bg-[#1A1D2E] p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full mr-2">
                  {/* Replace with actual image or icon */}
                  {/* <img src={plusImage} alt="plus" /> */}
                </div>
                <div>
                  <div>{token.name}</div>
                  <div className="text-sm text-gray-400">{token.fullName}</div>
                </div>
              </div>
              <div style={{ color: '#FFFFFF' }}>{token.amount}</div> {/* Display the amount dynamically in white */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Money1;
