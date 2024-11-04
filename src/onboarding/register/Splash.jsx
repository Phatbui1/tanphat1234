import React, { useEffect } from 'react';
import image from '../../assets/image.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem token có trong localStorage không
    const token = localStorage.getItem('token');
    
    if (token) {
      // Nếu token tồn tại, chuyển hướng ngay lập tức tới trang Home
      navigate('/home');
    } else {
      // Nếu không có token, đặt hẹn giờ để chuyển hướng sau 10 giây
      const timer = setTimeout(() => {
        navigate('/splash'); // Chuyển hướng tới Home sau 10 giây
      }, 10000); // 10000 milliseconds = 10 giây

      // Xóa timer nếu component bị unmount
      return () => clearTimeout(timer);
    }
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
      <img 
        src={image} 
        alt="Splash Image" 
        style={{ maxWidth: '100%', maxHeight: '100%' }} 
      />
    </div>
  );
}

export default Splash;
