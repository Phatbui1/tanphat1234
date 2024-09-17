import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import box from '../assets/box.png';
import { IoIosArrowBack } from "react-icons/io";

const HIstory = () => {
  const [activeTab, setActiveTab] = useState('deposit');
  const navigate = useNavigate(); // Create navigate function

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#090B2F', color: 'white', position: 'relative' }}>
      
      {/* Container cho tiêu đề và nút quay lại */}
      <div style={{ position: 'absolute', top: '20px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IoIosArrowBack
          style={{ fontSize: '24px', cursor: 'pointer', color: 'white', marginRight: '10px' }}
          onClick={handleBackClick} // Add onClick event to handle back navigation
        />
        <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Transaction History</h1>
      </div>

      {/* Container chính chứa các phần tử trung tâm */}
      <div style={{ textAlign: 'center' }}>
        {/* Thêm các nút Deposit và Withdraw */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <button
            onClick={() => handleTabClick('deposit')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              fontWeight: activeTab === 'deposit' ? 'bold' : 'normal',
              textDecoration: activeTab === 'deposit' ? 'underline' : 'none',
              color: activeTab === 'deposit' ? 'gold' : 'white',
            }}
          >
            Deposit
          </button>

          <button
            onClick={() => handleTabClick('withdraw')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              fontWeight: activeTab === 'withdraw' ? 'bold' : 'normal',
              textDecoration: activeTab === 'withdraw' ? 'underline' : 'none',
              color: activeTab === 'withdraw' ? 'gold' : 'white',
            }}
          >
            Withdraw
          </button>
        </div>

        {/* Hiển thị nội dung dựa trên tab đã chọn */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src={box} alt="box" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
          <p style={{ fontSize: '16px' }}>{activeTab === 'deposit' ? "There aren't any deposit transactions now" : "There aren't any withdraw transactions now"}</p>
        </div>
      </div>
    </div>
  );
};

export default HIstory;
