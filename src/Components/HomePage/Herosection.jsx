import React from 'react';
import hero from '../Assets/Hero.jpg';
import { ReactTyped } from 'react-typed';


const Herosection = () => {
  return (
    <div className=''>
      <div className="z-10 relative w-full h-[400px] md:h-[764px] bg-cover bg-center " style={{ backgroundImage: `url(${hero})` }}> 
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
            <div className="relative z-50 my-auto text-center px-5 md:px-10 pt-40 md:pt-72 text-white h-full w-full">
             <h2 className='font-extrabold text-lg md:text-2xl lg:text-3xl w-full leading-8'>Wear your story with Hashtags—   
                {/* <br/>  */}
                <ReactTyped strings={["Slip in, stand out."]} typeSpeed={80} loop className='italic mt-2 font-extrabold text-white py-2 px-3 bg-blue-700'/> 
              </h2>
            </div>
        </div>
    </div>
  );
}

export default Herosection;
