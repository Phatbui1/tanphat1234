import React from 'react';
import chuong from '../../assets/chuong.png';

const Ano = () => {
  return (
    <div className='bg-[#18193E] p-6 rounded-lg shadow-lg max-w-sm mx-auto'>
      <div className='flex items-center mb-4'>
        <img src={chuong} alt="chuong" className='mr-4'/>
        <h2 className='text-foreground font-semibold text-white'>Inactive members of your team have been notified!</h2>
      </div>
      <button className='bg-yellow-400 text-black hover:bg-yellow-300 w-full py-2 rounded-lg'>OK</button>
    </div>
  );
}

export default Ano;
