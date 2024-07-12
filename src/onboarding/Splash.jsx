import React, { useEffect } from 'react';
import image from '../../src/assets/image.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Thực hiện chuyển hướng tự động tới "/guild1" sau khi component được render
    const timer = setTimeout(() => {
      navigate('/guild1');
    }, 3000); // Chuyển hướng sau 10 giây (10000 milliseconds)

    return () => clearTimeout(timer); // Xóa timer nếu component bị unmount trước khi chuyển hướng
  }, [navigate]);

  return (
    <div style={{ 
      backgroundColor: '#090B2F', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      flexDirection: 'column'
    }}>
      <img src={image} alt="Splash Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <Link to="/guild1" style={{ marginTop: '20px', color: '#F7F7F7' }}></Link>
    </div>
  );
}

export default Splash;
