import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buy1 from "../assets/buy1.png";
import abc from "../assets/abc.png";
import abcd from "../assets/abcd.png";
import mail from "../assets/mail.png";
import hinhtim from "../assets/hinhtim.png";
import Imagehome from '../assets/home.png';
import ImageWallet from '../assets/Wallet.png';
import Imagecrown from '../assets/crown.png';
import crowna from '../assets/crowna.png';
import Trend from '../assets/Trend.png';
import authen from '../assets/profile/authen.png';
import key from '../assets/profile/key.png';
import bin from '../assets/profile/bin.png';

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    width: "100vw",
    height: "100vh",
    padding: "20px",
    backgroundColor: "#090B2D",
    color: "#fff",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    padding: "10px 0",
    borderBottom: "1px solid #444",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#eee",
    marginRight: "15px",
  },
  id: {
    fontSize: "12px",
    color: "#ccc",
    marginBottom: "4px",
  },
  username: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  infoSection: {
    width: "100%",
    maxWidth: "400px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "16px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #333",
    width: "100%",
  },
  infoLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
  },
  infoIcon: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
  },
  infoText: {
    fontSize: "12px",
    color: "#bbb",
    marginBottom: "4px",
  },
  infoValue: {
    fontSize: "14px",
    color: "#fff",
  },
  verified: {
    color: "yellow",
    fontWeight: "bold",
  },
  arrow: {
    width: "16px",
    height: "16px",
    fill: "#fff",
    marginLeft: "auto",
  },
  securitySection: {
    width: "100%",
    maxWidth: "400px",
    marginTop: "20px",
  },
  securityItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #333",
    cursor: "pointer",
    flexDirection: "row", // Ensure horizontal alignment
  },
  securityLeft: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  securityIcon: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
  },
  securityText: {
    fontSize: "14px",
    color: "#bbb",
  },
  deleteAccount: {
    color: "red",
  },
  modalContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#1C1F4A',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    color: 'white',
    maxWidth: '300px',
    width: '100%',
  },
  modalTitle: {
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: '20px',
  },
  modalInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#0e1036',
    color: '#fff',
  },
  modalButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    cursor: 'pointer',
  },
};

const RightArrow = () => (
  <svg
    style={styles.arrow}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDeleteAccount = () => {
    // Logic to delete account
    alert("Account Deleted");
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={buy1} alt="Profile" style={styles.profileImage} />
        <div>
          <div style={styles.id}>ID: 123456</div>
          <div style={styles.username}>@henryszb</div>
        </div>
      </header>
      <section style={styles.infoSection}>
        <div style={styles.sectionTitle}>Informations</div>
        <div style={styles.infoItem}>
          <div style={styles.infoLeft}>
            <img src={abcd} alt="Username" style={styles.infoIcon} />
            <div style={styles.infoText}>Username</div>
            <div style={styles.infoValue}>@henryszb</div>
          </div>
          <RightArrow />
        </div>
        <div style={styles.infoItem}>
          <div style={styles.infoLeft}>
            <img src={abc} alt="Account Type" style={styles.infoIcon} />
            <div style={styles.infoText}>Type Account</div>
            <div style={styles.infoValue}>Normal User</div>
          </div>
          <RightArrow />
        </div>
        <div style={styles.infoItem}>
          <div style={styles.infoLeft}>
            <img src={mail} alt="Email" style={styles.infoIcon} />
            <div style={styles.infoText}>Email address</div>
            <div style={styles.infoValue}>myname@gmail.com</div>
          </div>
          <RightArrow />
        </div>
        <div style={styles.infoItem}>
          <div style={styles.infoLeft}>
            <img src={hinhtim} alt="Verified" style={styles.infoIcon} />
            <div style={styles.infoText}>Verify Account</div>
            <div style={styles.infoValue}>Verified</div>
          </div>
          <RightArrow />
        </div>
      </section>
      <section style={styles.securitySection}>
        <div style={styles.sectionTitle}>Security</div>
        <div style={styles.securityItem} onClick={() => alert("2FA Settings")}>
          <div style={styles.securityLeft}>
            <img src={authen} alt="authen" style={styles.securityIcon} />
            <p style={styles.securityText}>Two-Factor Authentication</p>
          </div>
          <span style={styles.securityText}>Disabled</span>
          <RightArrow />
        </div>
        <div style={styles.securityItem} onClick={() => alert("Change Password")}>
          <div style={styles.securityLeft}>
            <img src={key} alt="key" style={styles.securityIcon} />
            <p style={styles.securityText}>Change password</p>
          </div>
          <RightArrow />
        </div>
        <div
          style={{ ...styles.securityItem, ...styles.deleteAccount }}
          onClick={handleDeleteClick}
        >
          <div style={styles.securityLeft}>
            <img src={bin} alt="bin" style={styles.securityIcon} />
            <p>Delete Your Account</p>
          </div>
          <RightArrow />
        </div>
      </section>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '400px',
          maxWidth: '600px',
          backgroundColor: '#090B2F',
          borderRadius: '12px',
          padding: '10px 0',
          position: 'fixed',
          bottom: '20px',
        }}
      >
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/home')}
        >
          <img src={Imagehome} alt="home" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/money')}
        >
          <img src={ImageWallet} alt="Wallet" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/select')}
        >
          <img src={Imagecrown} alt="crown" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/page')}
        >
          <img src={Trend} alt="trend" style={{ width: '24px', height: '24px' }} />
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/crown')}
        >
          <img src={crowna} alt="crowna" style={{ width: '24px', height: '24px' }} />
        </button>
      </div>

      {/* Modal component */}
      {showModal && (
        <div style={styles.modalContainer}>
          <div style={styles.modal}>
            <div style={styles.modalTitle}>Delete Your Account</div>
            <p style={styles.modalText}>
              Deleting your account means that all your data will be permanently deleted and cannot be recovered. Enter the two-factor code to complete the process.
            </p>
            <input
              type="text"
              placeholder="Enter 2FA code"
              value={twoFactorCode}
              onChange={(e) => setTwoFactorCode(e.target.value)}
              style={styles.modalInput}
            />
            <button
              onClick={handleDeleteAccount}
              style={styles.modalButton}
              disabled={twoFactorCode !== 'DELETE'}
            >
              Delete My Account
            </button>
            <button onClick={handleModalClose} style={styles.cancelButton}>
              Keep my account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
