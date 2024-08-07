import React, { useState } from 'react';
import mobile from '../assets/mobile.png';
import sms from '../assets/sms.png';

const containerStyle = {
    background: 'linear-gradient(to bottom, #000000, #333333)', // Black gradient background
    color: '#ffffff',
    padding: '20px',
    minHeight: '100vh',
};

const headerTextStyle = {
    color: '#ffcc00', // Yellow color for header text
    fontSize: '2em',
    marginBottom: '20px',
};

const cardStyle = {
    background: '#222222', // Slightly lighter dark background for cards
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
};

const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
};

const flexStyle = {
    display: 'flex',
    alignItems: 'center',
};

const iconStyle = {
    width: '24px',
    height: '24px',
    marginRight: '10px',
};

const fontMediumStyle = {
    fontWeight: '500',
};

const statusStyle = {
    fontSize: '0.9em',
    color: '#ff6666', // Red color for status
};

const verifiedStatusStyle = {
    fontSize: '0.9em',
    color: '#66ff66', // Green color for verified status
};

const descriptionStyle = {
    marginBottom: '15px',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
};

const verifyButtonStyle = {
    background: '#ffcc00', // Yellow button
    color: '#000000', // Black text
    border: 'none',
    borderRadius: '5px',
    padding: '15px 0', // Adjust padding for height, width controlled by width
    width: '100%', // Full width of the parent container
    maxWidth: '300px', // Max width for larger buttons
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    textAlign: 'center',
};

const verifyButtonHoverStyle = {
    background: '#ffb700', // Slightly darker yellow on hover
};

const Verify = () => {
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);

    const handleVerifyPhone = () => {
        setPhoneVerified(true);
        // Add additional logic for phone verification if needed
    };

    const handleVerifyEmail = () => {
        setEmailVerified(true);
        // Add additional logic for email verification if needed
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerTextStyle}>Account Verification</h2>
            
            <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                    <div style={flexStyle}>
                        <img src={mobile} alt="mobile" style={iconStyle} />
                        <span style={fontMediumStyle}>Phone number</span>
                    </div>
                    <span style={phoneVerified ? verifiedStatusStyle : statusStyle}>
                        {phoneVerified ? 'Verified' : 'Unverified'}
                    </span>
                </div>
                <p style={descriptionStyle}>
                    Your phone number for this account is {phoneVerified ? 'verified' : 'unverified'}. You will need to verify your number in order to receive rewards when mainnet.
                </p>
                {!phoneVerified && (
                    <div style={buttonContainerStyle}>
                        <button 
                            style={verifyButtonStyle}
                            onMouseOver={(e) => e.currentTarget.style.background = verifyButtonHoverStyle.background}
                            onMouseOut={(e) => e.currentTarget.style.background = verifyButtonStyle.background}
                            onClick={handleVerifyPhone}
                        >
                            Verify
                        </button>
                    </div>
                )}
            </div>
        
            <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                    <div style={flexStyle}>
                        <img src={sms} alt="sms" style={iconStyle} />
                        <span style={fontMediumStyle}>Email address</span>
                    </div>
                    <span style={emailVerified ? verifiedStatusStyle : statusStyle}>
                        {emailVerified ? 'Verified' : 'Unverified'}
                    </span>
                </div>
                <p style={descriptionStyle}>
                    Verify your email to recover your Superlott Account in the future.
                </p>
                {!emailVerified && (
                    <div style={buttonContainerStyle}>
                        <button 
                            style={verifyButtonStyle}
                            onMouseOver={(e) => e.currentTarget.style.background = verifyButtonHoverStyle.background}
                            onMouseOut={(e) => e.currentTarget.style.background = verifyButtonStyle.background}
                            onClick={handleVerifyEmail}
                        >
                            Verify
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Verify;
