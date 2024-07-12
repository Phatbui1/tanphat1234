import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const User = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z0-9]{4,22}$/;

    if (regex.test(input)) {
      setUsername(input);
      setError('');
    } else {
      setError('Username should be between 4 and 22 characters, consisting of only letters and numbers');
    }
  };

  return (
    <div style={{ backgroundColor: '#090B2F', height: '100vh' }}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6  rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-left text-white">Username</h1>
          <p className='text-1xl font-bold text left  text-white'>Username should be between 4 and 22 characters, consisting of only letters and number</p>
          <div className="space-y-2">
            <input
              type="text"
              className={`w-full p-2 rounded text-white bg-gray-700 focus:outline-none ${error ? 'border-red-500 border' : ''}`}
              placeholder="@ your username, e.g, Henry"
              value={username}
              onChange={handleUsernameChange}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-6 rounded w-full flex items-center justify-center">
            Let go
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;