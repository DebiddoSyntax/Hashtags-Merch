import React, { useContext, useState, useEffect } from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { CartContext, ProductprofileContext } from '../Components/Functions/ContextProvider';
import Button from '../Components/Button';
import { useLocation, Link } from 'react-router-dom';


const Productpage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { profile } = useContext(ProductprofileContext);
  const { dispatch } = useContext(CartContext);

  const [isBorderVisible, setIsBorderVisible] = useState(true);
  const [selectedSize, setSelectedSize] = useState('S');


  const handleClick = () => {
    setIsBorderVisible(!isBorderVisible); // Toggle the border visibility
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    dispatch({ type: "Add", product: { ...profile, size: selectedSize } })
  }

  return (
    <div className='mb-24 pt-32'>
      {/* <div className='mb-7 pt-20 flex px-5 md:px-10 pb-3 text-sm md:text-lg font-medium items-center border-b-[3px] border-solid border-gray-400'>
        <h3 className='pl-0 pr-3 pt-2 text-gray-500'>Store</h3>
        <div className='px-1 pt-2 text-gray-500 text-lg md:text-xl'><MdOutlineArrowForwardIos /></div>
        <h3 className='px-3 pt-2 text-gray-500'>All</h3>
        <div className='px-1 pt-2 text-gray-500 text-lg md:text-xl'><MdOutlineArrowForwardIos /></div>
        <h3 className='px-3 pt-2 text-gray-900'>All</h3>
      </div> */}

      <div className='mx-5 md:mx-10 grid grid-cols-1 md:grid-cols-2 mb-10'>
        <div className='bg-[#f2f2f2] p-10 h-96 md:h-auto lg:h-[552px] w-full items-center'>
          <div className='h-full w-full'>
            <img className='h-full w-full object-contain' src={isBorderVisible ? profile.image : profile.imageBack} alt={profile.title} />
          </div>
        </div>

        <div className='mx-0 md:mx-7 md:h-full lg:h-auto'>
          <div>
            <h2 className='text-2xl font-semibold mt-5 md:mt-0'>{profile.title}</h2>
            <p className='text-sm md:text-lg font-normal my-1 text-left py-2'>{profile.description}</p>
          </div>

          <div className='flex mt-10'>
            <div className={`bg-[#f2f2f2] p-4 mr-5 border-4 ${isBorderVisible ? 'border-blue-700' : 'border-transparent'}`} onClick={handleClick}>
              <div className='h-20 lg:h-24 w-20'>
                <img className='h-full w-full object-contain' src={profile.image} alt={profile.title} />
              </div>
            </div>

            <div className={`bg-[#f2f2f2] p-4 mr-5 border-4 ${isBorderVisible ? 'border-transparent' : 'border-blue-700'}`} onClick={handleClick}>
              <div className='h-20 lg:h-24 w-20'>
                <img className='h-full w-full object-contain' src={profile.imageBack} alt={profile.title} />
              </div>
            </div>
          </div>

          <div className='mt-7'>
            <label htmlFor="colors">Select your size</label>
            <div className='mt-5'>
              {['S', 'L', 'XL', 'XXL'].map((size) => (
                <span
                  key={size}
                  className={`p-3 mr-3 cursor-pointer ${selectedSize === size ? 'bg-blue-700 text-white' : 'bg-[#f2f2f2] text-black'}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className='mt-10 text-2xl font-semibold'>
            <p>{profile.price}</p>
          </div>
          <Link to="/cart">
            <Button
              type='submit'
              className="mt-5 md:mt-5 text-sm w-full bg-blue-700 text-white hover:bg-blue-800"
              onClick={() => handleAddToCart()}>
              Add to cart
            </Button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Productpage;
