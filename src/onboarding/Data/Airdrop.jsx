import React from 'react';
import image_coin from '../../assets/image_coin.png';
import TetherBadge from '../../assets/TetherBadge.png';
import Logo from '../../assets/Logo.png';

const Airdrop = () => {
  return (
    <div style={{ backgroundColor: '#000000', padding: '20px', minHeight: '100vh' }}> {/* Thêm minHeight để đảm bảo chứa toàn bộ nội dung */}
      <h1 className='text-2xl font-bold text-white mb-4 text-center'>Airdrop</h1> {/* Căn giữa tiêu đề */}
      <img src={image_coin} alt='image_coin' className='mb-4 mx-auto max-w-full h-auto'/> {/* Đảm bảo hình ảnh không vượt quá kích thước chứa */}
      
      <h2 className='text-xl font-semibold text-white mb-2'>Hottest Airdrop</h2>
      <div className='bg-gray-800 p-4 rounded-lg mb-4'>
        <div className='flex items-center mb-2'>
          <img src={TetherBadge} alt="TetherBadge" className='mr-2 w-8 h-8'/>
          <span className='font-bold text-white'>DEXDAO</span>
        </div>
        <p className='text-gray-400 mb-1'>Total value: 5,000 USDC</p>
        <p className='text-gray-400 mb-2'>Airdrop ends: 2023-12-22</p>
        <button className='bg-yellow-400 text-black hover:bg-yellow-300 p-2 rounded-lg'>Join Airdrop</button>
      </div>

      <h2 className="text-xl font-semibold text-white mb-2">Latest Airdrops</h2>
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <img src={Logo} alt='Logo' className='mr-2 w-8 h-8'/>
          <span className="font-bold text-white">Futureverse</span>
        </div>
        <p className="text-gray-400 mb-1">Total value: $60,000 ROOT & USDT</p>
        <p className="text-gray-400 mb-2">Airdrop ends: 2023-12-22</p>
        <button className="bg-yellow-400 text-black hover:bg-yellow-300 p-2 rounded-lg">Join Airdrop</button>
      </div>
    </div>
  );
}

export default Airdrop;
