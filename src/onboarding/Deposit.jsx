import React from 'react';
import { FaRegCopy } from "react-icons/fa";
import { IoIosSwap } from "react-icons/io";
import DepositImage from '../assets/Deposit/Deposit.png'; // Image for QR code
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Deposit = () => {
  const navigate = useNavigate(); // Create a navigate function

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate(-1); // Go back one page in the history
  };

  return (
    <div style={styles.container}>
      {/* Title and Back Arrow */}
      <div style={styles.headerContainer}>
        <MdArrowBackIos style={styles.backArrow} onClick={handleBackClick} /> {/* Add onClick handler */}
        <h1 style={styles.title}>Deposit USDT</h1>
      </div>

      <p style={styles.description}>
        Please, make sure you deposit via the{' '}
        <span style={styles.highlight}>Smart Chain Network (BEP20)</span> network. Otherwise the funds may be lost.
      </p>

      {/* QR Code Image */}
      <div style={styles.qrContainer}>
        <img src={DepositImage} alt="QR Code" style={styles.qrImage} />
      </div>

      {/* Receiving Address */}
      <div style={styles.infoContainer}>
        <div style={styles.infoSection}>
          <p style={styles.infoTitle}>Your receiving address</p>
          <div style={styles.addressContainer}>
            <p style={styles.addressText}>0x06eFBFBf6c603744a93587A63Cbf200A4E1b0D5</p>
            <FaRegCopy style={styles.icon} />
          </div>
        </div>

        {/* Network */}
        <div style={styles.infoSection}>
          <p style={styles.infoTitle}>Network</p>
          <div style={styles.networkContainer}>
            <p style={styles.networkText}>BNB Smart Chain (BEP20)</p>
            <IoIosSwap style={styles.icon} />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Save image</button>
        <button style={styles.button}>Share</button>
      </div>
    </div>
  );
};

// Inline styles for full screen and centering
const styles = {
  container: {
    backgroundColor: '#090B2F', // Dark background
    color: '#fff',
    height: '100vh', // Full height of the viewport
    width: '100vw',  // Full width of the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  backArrow: {
    color: '#fff', // White icon
    fontSize: '24px',
    marginRight: '10px',
    cursor: 'pointer', // Add pointer cursor for better UX
  },
  title: {
    fontSize: '24px',
    margin: 0,
    color: '#fff', // White title
  },
  description: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#ccc',
    textAlign: 'center', // Centered text
  },
  highlight: {
    color: '#FFD700', // Yellow highlight
  },
  qrContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  qrImage: {
    width: '150px',
    height: '150px',
  },
  infoContainer: {
    backgroundColor: '#1C1F4A',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '400px',
  },
  infoSection: {
    marginBottom: '10px',
  },
  infoTitle: {
    fontSize: '12px',
    color: '#aaa',
  },
  addressContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressText: {
    fontSize: '12px',
    color: '#fff',
  },
  networkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  networkText: {
    fontSize: '12px',
    color: '#fff',
  },
  icon: {
    color: '#fff', // White icon
    fontSize: '20px', // Set a size for visibility
    cursor: 'pointer', // Add pointer cursor for better UX
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '400px',
  },
  button: {
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    flex: 1,
    margin: '0 5px',
  },
};

export default Deposit;
