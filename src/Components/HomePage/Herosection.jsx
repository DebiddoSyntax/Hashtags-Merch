import React from 'react';
import herosectionImage from '../Assets/Herosection.png';
import hero from '../Assets/Hero.jpg';

const Herosection = () => {
  return (
    <div className='pt-20'>
      <div className='bg-black opacity-15'></div>
      <img className="w-[100%] object-cover " 
        src={hero} 
        alt='Herosection'
      />
    </div>
  );
}

export default Herosection;
