import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate để điều hướng
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
    width: "100vw", // Chiều rộng toàn bộ viewport
    height: "100vh", // Chiều cao toàn bộ viewport
    padding: "20px",
    backgroundColor: "#090B2D", // Nền màu xanh đậm
    color: "#fff", // Màu chữ trắng để tạo độ tương phản
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
    borderBottom: "1px solid #444", // Đường viền nhẹ để tách biệt
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%", // Hình ảnh hồ sơ tròn
    backgroundColor: "#eee", // Màu nền thay thế nếu hình ảnh không tải
    marginRight: "15px",
  },
  id: {
    fontSize: "12px",
    color: "#ccc", // Màu xám cho văn bản ID
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
    justifyContent: "space-between", // Trải đều các mục
    padding: "10px 0",
    borderBottom: "1px solid #333", // Đường viền nhẹ giữa các mục
  },
  infoLeft: {
    display: "flex",
    alignItems: "center",
  },
  infoIcon: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
  },
  infoText: {
    fontSize: "14px",
  },
  verified: {
    color: "yellow", // Màu vàng cho văn bản "Verified"
    fontWeight: "bold",
  },
  arrow: {
    width: "16px",
    height: "16px",
    marginLeft: "auto", // Đẩy mũi tên sang bên phải
    fill: "#fff",
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
  },
  securityText: {
    fontSize: "14px",
    color: "#bbb", // Màu sáng hơn một chút cho trạng thái không hoạt động
  },
  deleteAccount: {
    color: "red",
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
  const [showModal, setShowModal] = useState(false);  // State để quản lý hiển thị modal
  const navigate = useNavigate();  // useNavigate hook để điều hướng

  // Hàm xử lý sự kiện khi nút trong modal được nhấn
  const handleModalButtonClick = () => {
    setShowModal(false);  // Đóng modal
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
          </div>
          <span style={styles.infoText}>@henryszb</span>
          <RightArrow />
        </div>
        <div style={styles.infoItem}>
          <div style={styles.infoLeft}>
            <img src={abc} alt="Account Type" style={styles.infoIcon} />
            <div style={styles.infoText}>Type Account</div>
          </div>
          <span style={styles.infoText}>Normal User</span>
          <RightArrow />
        </div>
        <div style={styles.infoItem}>
          <div style={styles.infoLeft}>
            <img src={mail} alt="Email" style={styles.infoIcon} />
            <div style={styles.infoText}>Email address</div>
          </div>
          <span style={styles.infoText}>myname@gmail.com</span>
          <RightArrow />
        </div>
        <div style={styles.infoItem}>
          <div style={styles.infoLeft}>
            <img src={hinhtim} alt="Verified" style={styles.infoIcon} />
            <div style={styles.infoText}>Verify Account</div>
          </div>
          <span style={styles.verified}>Verified</span>
          <RightArrow />
        </div>
      </section>
      <section style={styles.securitySection}>
        <div style={styles.sectionTitle}>Security</div>
        <div style={styles.securityItem} onClick={() => alert("2FA Settings")}>
          <div style={styles.infoLeft}>
            <img src={authen} alt="authen" style={{ width: '24px', height: '24px' }} />
            <p style={styles.securityText}>Two-Factor Authentication</p>
          </div>
          <span style={styles.securityText}>Disabled</span>
          <RightArrow />
        </div>
        <div style={styles.securityItem} onClick={() => alert("Change Password")}>
          <div style={styles.infoLeft}>
            <img src={key} alt="key" style={{ width: '24px', height: '24px' }} />
            <p style={styles.securityText}>Change password</p>
          </div>
          <RightArrow />
        </div>
        <div
          style={{ ...styles.securityItem, ...styles.deleteAccount }}
          onClick={() => alert("Delete Account")}
        >
          <div style={styles.infoLeft}>
            <img src={bin} alt="bin" style={{ width: '24px', height: '24px' }} />
            <p>Delete Your Account</p>
          </div>
          <RightArrow />
        </div>
      </section>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: '360px',
          backgroundColor: '#1C1F4A',
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
        <div style={{
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
        }}>
          <div style={{
            backgroundColor: '#1C1F4A',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white',
            maxWidth: '300px',
            width: '100%',
          }}>
            <p>Inactive member of your Team have been notified!</p>
            <button
              onClick={handleModalButtonClick} 
              style={{
                backgroundColor: '#F9D54A',
                color: '#000000',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '8px',
                marginTop: '20px',
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
