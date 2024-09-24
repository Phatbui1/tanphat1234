import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import box from '../../assets/box.png';
import { IoIosArrowRoundBack } from "react-icons/io";

const History = () => {
  const [activeTab, setActiveTab] = useState('deposit');
  const navigate = useNavigate(); // Create navigate function

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div style={styles.container}>
      
      {/* Header with back button and title */}
      <div style={styles.headerContainer}>
        <IoIosArrowRoundBack style={styles.backArrow} onClick={handleBackClick} />
        <h1 style={styles.title}>Transaction History</h1>
      </div>

      {/* Tabs for Deposit and Withdraw */}
      <div style={styles.tabContainer}>
        <button
          onClick={() => handleTabClick('deposit')}
          style={{
            ...styles.tabButton,
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
            ...styles.tabButton,
            fontWeight: activeTab === 'withdraw' ? 'bold' : 'normal',
            textDecoration: activeTab === 'withdraw' ? 'underline' : 'none',
            color: activeTab === 'withdraw' ? 'gold' : 'white',
          }}
        >
          Withdraw
        </button>
      </div>

      {/* Content based on active tab */}
      <div style={styles.contentContainer}>
        <img src={box} alt="box" style={styles.image} />
        <p style={styles.description}>
          {activeTab === 'deposit' 
            ? "There aren't any deposit transactions now" 
            : "There aren't any withdraw transactions now"}
        </p>
      </div>
    </div>
  );
};

// Styles object
// Updated styles object
const styles = {
  container: {
    backgroundColor: '#090B2F', // Dark background
    color: '#fff',
    height: '100vh', // Full height of the viewport
    width: '100vw', // Full width of the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Align top
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative', // For absolute header positioning
  },
  headerContainer: {
    width: '100%', // Full width
    display: 'flex',
    justifyContent: 'space-between', // Arrow on the left, title in the center
    alignItems: 'center', // Align items vertically in the middle
    padding: '10px 20px', // Add some padding for spacing
  },
  backArrow: {
    fontSize: '70px',  // Increase the size to make it more noticeable
    color: 'white',  // Maintain white color but make sure your background supports it
    cursor: 'pointer',
    padding: '10px',  // Increase padding for a better click area
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flexGrow: 1, // Make the title take the remaining space
    marginRight: '50px', // Ensure spacing from the right to avoid overlap with arrow
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '40px', // Reduced to align better after changes
    marginBottom: '20px',
  },
  tabButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    transition: 'all 0.3s ease', // Smooth transition on hover
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    textAlign: 'center',
    color: '#ccc', // Light grey color for description
  },
};


export default History;
