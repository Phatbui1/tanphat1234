import React from "react";
import buy1 from "../assets/buy1.png";  // User profile picture placeholder
import abc from "../assets/abc.png";   // Icon for account type
import abcd from "../assets/abcd.png"; // Icon for username
import mail from "../assets/mail.png"; // Icon for email
import hinhtim from "../assets/hinhtim.png"; // Icon for verify account

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    width: "100vw", // Full viewport width
    height: "100vh", // Full viewport height
    padding: "20px",
    backgroundColor: "#090B2D", // Dark blue background
    color: "#fff", // White text for contrast
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
    borderBottom: "1px solid #444", // Subtle border for separation
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%", // Circular profile image
    backgroundColor: "#eee", // Placeholder color if image fails to load
    marginRight: "15px",
  },
  id: {
    fontSize: "12px",
    color: "#ccc", // Gray color for ID text
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
    justifyContent: "space-between", // Spread items to the ends
    padding: "10px 0",
    borderBottom: "1px solid #333", // Subtle border between items
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
    color: "yellow", // Yellow for "Verified" text
    fontWeight: "bold",
  },
  arrow: {
    width: "16px",
    height: "16px",
    marginLeft: "auto", // Push arrow to the right
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
    color: "#bbb", // Slightly lighter for inactive state
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
            <p style={styles.securityText}>Two-Factor Authentication</p>
          </div>
          <span style={styles.securityText}>Disabled</span>
          <RightArrow />
        </div>
        <div style={styles.securityItem} onClick={() => alert("Change Password")}>
          <div style={styles.infoLeft}>
            <p style={styles.securityText}>Change password</p>
          </div>
          <RightArrow />
        </div>
        <div
          style={{ ...styles.securityItem, ...styles.deleteAccount }}
          onClick={() => alert("Delete Account")}
        >
          <div style={styles.infoLeft}>
            <p>Delete Your Account</p>
          </div>
          <RightArrow />
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
