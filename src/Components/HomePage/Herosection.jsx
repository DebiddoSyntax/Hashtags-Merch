import React from 'react';
import herosectionImage from '../Assets/Herosection.png';

const Herosection = () => {
  return (
    <div>
      <img className="w-[100%] object-cover pt-20" 
        src={herosectionImage} 
        alt='Herosection'
      />
    </div>
  );
}

export default Herosection;
