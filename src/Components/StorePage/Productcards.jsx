import React, { useContext, useState } from 'react';
// import { FaStar } from "react-icons/fa";
import Data from "../Data.json";
import { CartContext, ProductprofileContext } from '../Functions/ContextProvider';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { HiOutlineX } from "react-icons/hi";





// this is the products details fetched from json
const products = Data.products; 

// Single card code
const Productcard = ({ product}) => {

  const {dispatch} = useContext(CartContext);
  const {setProfile} = useContext(ProductprofileContext);
  const [selectedSize, setSelectedSize] = useState('S');
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  
  
  const [quickcartOpen, setQuickcartOpen] = useState(false);


  const toggleQuickcart = () => {
    setQuickcartOpen(!quickcartOpen);
  };

  const closeQuickcartOpen = () => {
    setQuickcartOpen(false);
    setConfirmationOpen(false);
  };


  const handleAddToCart = () => {
    dispatch({ type: "Add", product: { ...product, size: selectedSize } });
    setConfirmationOpen(true);
    setQuickcartOpen(false);
  };
  

  return (
    <div className="max-w-96  md:max-w-sm bg-white overflow-hidden h-auto">
          <Link to="/productpage" onClick={()=>{setProfile(product)}}>
          <div className='bg-[#f2f2f2] p-5 w-full'>
            <div className='h-full w-full'>
              <img className='h-40 w-40 object-contain' src={product.image} alt={product.title} />
            </div>
          </div>
          </Link>


      <div className="py-5 max-w-full">
        <h3 className="text-[14px] font-semibold text-gray-800">{product.title}</h3>
        <p className="text-[14px] font-semibold text-blue-700 pt-2">₦{product.price}</p>
      </div>

      {quickcartOpen ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex" >
              <div className='w-[70%] md:w-[40%] m-auto bg-[#ffff] py-7 px-7'>
                <div className="flex py-4 w-[100%] items-start" onClick={(e) => e.stopPropagation()}>
                    <div className='w-full'>
                    <div className='mt-0'>
                      <h2 className='mb-2 font-semibold text-[16px] md:text-xl'>{product.title}</h2>
                      <span className='text-sm md:text-[16px]'>Price: <p className='pb-5 mb-5 text-xl font-semibold text-blue-700 border-b-2'>{product.price}</p></span>
                      <label htmlFor="Size" className='text-sm md:text-[16px]'>Select your size</label>
                      <div className='mt-5'>
                        {['S', 'L', 'XL', 'XXL'].map((size) => (
                          <span
                            key={size}
                            className={`p-3 mr-3 cursor-pointer ${selectedSize === size ? 'bg-blue-700 text-white' : 'bg-[#f2f2f2] text-black'}`}
                            onClick={() => handleSizeClick(size)}>
                            {size}
                          </span> ))}
                      </div>
                    </div>
                    </div>

                  <HiOutlineX className='text-2xl mx-0 cursor-pointer hover:text-blue-700' onClick={closeQuickcartOpen}/>
                </div> 
                <Button
                    type='submit'
                    className="mt-5 md:mt-5 text-sm w-full bg-blue-700 text-white hover:bg-blue-800"
                    onClick={() => handleAddToCart()}>
                    Add to cart
                  </Button>
              </div>
            </div>
          ) : ""}



{confirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex">
          <div className="w-[70%] md:w-[40%] m-auto bg-[#ffff] py-7 px-7 text-center">
            <h2 className="mb-2 font-semibold text-[16px] md:text-xl">Product added to cart!</h2>
            <Button
              className="mt-5 md:mt-5 text-sm w-full border-2 border-blue-700 text-black "
              onClick={closeQuickcartOpen}>
              Continue Shopping
            </Button>

            <Link to="/cart">
              <Button
                className="mt-5 md:mt-5 text-sm w-full bg-blue-700 text-white hover:bg-blue-800">
                Go to Cart
              </Button>
            </Link>
          </div>
        </div>
      )}


      <button className='px-3 py-2 w-full border-[2.5px] text-sm font-medium border-blue-700 hover:bg-blue-700 hover:text-white' 
      onClick={toggleQuickcart}>Add to cart</button>
    </div>
  );
};




const Productcards = () => {
  const [selectedCategory, setSelectedCategory] = useState('Collection');
  const [isChecked, setIsChecked] = useState([]);
  const [genderChange, setGenderChange] = useState([])

 



  const handleGenderChange = (genderType) => {
    setGenderChange(prevGenderChange => 
      prevGenderChange.includes(genderType) 
      ? prevGenderChange.filter(gender => gender !== genderType)
      : [...prevGenderChange, genderType]
    );
  };

  const handleCheckboxChange = (wearType) => {
    setIsChecked(prevIsChecked => 
      prevIsChecked.includes(wearType) 
        ? prevIsChecked.filter(wear => wear !== wearType) 
        : [...prevIsChecked, wearType]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Collection' || product.category === selectedCategory;
    const matchesCheckbox = isChecked.length === 0 || isChecked.includes(product.wear);
    const matchesGender = genderChange.length ===0 || genderChange.includes(product.gender)
    return matchesCategory && matchesCheckbox && matchesGender;
  });

  return (
    <div className='flex 3xl:mx-auto pt-20'>
      {/* This is the sidebar code */}
      <div className='hidden md:block ml-5 md:ml-10 mr-5 pt-0 md:mt-10 w-[20%]'>
          <ul className='text-xl font-semibold'>
              <li onClick={() => handleGenderChange('male')} className='py-4 cursor-pointer'>Men</li>
              <li  onClick={() => handleGenderChange('female')} className='py-4 cursor-pointer'>Women</li>
          </ul>


          {/* This is the checkbox code */}
          <div className='font-medium'>
              <label className="flex items-center mt-5">
                  <input 
                    type="checkbox" 
                    className="hidden peer" 
                    checked={isChecked.includes('T-shirt')} 
                    onChange={() => handleCheckboxChange('T-shirt')} 
                  />
                  <div className="w-6 h-6 bg-[#f2f2f2] rounded-sm peer-checked:bg-blue-600 
                      peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:font-bold 
                      peer-checked:after:flex peer-checked:after:justify-center peer-checked:after:items-center">
                  </div>
                  <span className="ml-3 text-xl text-gray-700">T-Shirts</span>
              </label>

              <label className="flex items-center mt-5">
                  <input 
                    type="checkbox" 
                    className="hidden peer" 
                    checked={isChecked.includes('Sweatshirt')} 
                    onChange={() => handleCheckboxChange('Sweatshirt')} 
                  />
                  <div className="w-6 h-6 bg-[#f2f2f2] rounded-sm peer-checked:bg-blue-600 
                      peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:font-bold 
                      peer-checked:after:flex peer-checked:after:justify-center peer-checked:after:items-center">
                  </div>
                  <span className="ml-3 text-xl text-gray-700">Sweatshirts</span>
              </label>

              <label className="flex items-center mt-5">
                  <input 
                    type="checkbox" 
                    className="hidden peer" 
                    checked={isChecked.includes('Hoodie')} 
                    onChange={() => handleCheckboxChange('Hoodie')} 
                  />
                  <div className="w-6 h-6 bg-[#f2f2f2] rounded-sm peer-checked:bg-blue-600 
                      peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:font-bold 
                      peer-checked:after:flex peer-checked:after:justify-center peer-checked:after:items-center">
                  </div>
                  <span className="ml-3 text-xl text-gray-700">Hoodies</span>
              </label>
          </div>
      </div>

             {/* Checkbox code ends here */}
      {/* Sidebar code ends here */}




      <div className='mt-10 w-full'>
        <div className='w-full '>
          {/* This is the dropdown code */} 
            <select className='mt-5 mx-5 pb-5 pt-0 border-b-[3px] border-blue-700 '
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                <option className='p-10' value="Collection">Collection</option>
                <option className='p-10' value="Wildthought">Wildthought</option>
                <option className='p-10' value="Butterfly">Butterfly</option>
            </select>
            {/* ends here */}

            <div className='pb-10 px-5 md:pr-10 mt-5 md:mt-10 mr-0 md:mr-10 min-w-auto w-full'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 w-full'>
                  {filteredProducts.map((product, id) => (
                  <Productcard 
                      product={product}
                      key={id}/>
                  ))}
              </div>

              {/* <p className='items-center text-center'>This is a nav button</p> */}
            </div>
        </div>
      </div>
      {/* code ends here */}
    </div>
  );
};

export default Productcards;
