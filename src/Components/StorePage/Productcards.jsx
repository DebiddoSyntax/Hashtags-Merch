import React, { useContext, useState } from 'react';
// import { FaStar } from "react-icons/fa";
import Data from "../Data.json";
import { CartContext, ProductprofileContext } from '../Functions/ContextProvider';
import useClicktoClose from '../Functions/useClicktoClose';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { HiOutlineX } from "react-icons/hi";
import { HiMiniAdjustmentsHorizontal, HiChevronDown } from "react-icons/hi2";





// this is the products details fetched from json
const products = Data.products; 

// Single card function code
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
  

  const closeQuickcartRef = useClicktoClose(() => {
    setQuickcartOpen(false);
  })

  const closeConfirmCartRef = useClicktoClose(() => {
    setConfirmationOpen(false);
  })

  


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

      {/* quickcart code */}
      {quickcartOpen ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex" >
              <div className='relative w-[70%] md:w-[40%] m-auto bg-[#ffff] py-7 px-7' ref={closeQuickcartRef}>
                <div className="flex py-4 w-[100%] items-start" onClick={(e) => e.stopPropagation()}>
                    <div className='w-full'>
                    <div className='mt-0'>
                      <h2 className='mb-2 font-semibold text-[16px] md:text-xl'>{product.title}</h2>
                      <span className='text-sm md:text-[16px]'>Price: <p className='pb-5 mb-5 text-xl font-semibold text-blue-700 border-b-2'>₦{product.price}</p></span>
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


      {/* Quickcart confirmation code */}
      {confirmationOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex">
                <div className="w-[70%] md:w-[40%] m-auto bg-[#ffff] py-7 px-7 text-center" ref={closeConfirmCartRef} >
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
            {/* Quickcart confirmation code ends here */}


            <button className='px-3 py-2 w-full border-[2.5px] text-sm font-medium border-blue-700 hover:bg-blue-700 hover:text-white' 
              onClick={toggleQuickcart}>Add to cart
            </button>
          </div>
        );
      };



// Main function code
const Productcards = () => {
  const [selectedCategory, setSelectedCategory] = useState('Collections');
  const [isChecked, setIsChecked] = useState([]);
  const [genderChange, setGenderChange] = useState("All")
  const [filterOptions, setFilterOptions] = useState(false);

  // mobile filter toggle code
  const toggleFilter = () => {
    setFilterOptions(!filterOptions)
  }

  // const filterOptionsRef = useClicktoClose(() => {
  //   setFilterOptions(false)
  //  })

  // collection dropdown code
  const [dropdownOptions, setDropdownOptions] = useState(false);


  const toggleDropdownOptions = () => {
    setDropdownOptions(!dropdownOptions)
  }

 const handleDropdown = (collection) => {
  setSelectedCategory(collection);
  toggleDropdownOptions();
 }


 const closeDropdownRef = useClicktoClose(() => {
  setDropdownOptions(false)
 })
// collection dropdown code ends here

// gender code 
 const handleGender = (gender) => {
  setGenderChange(gender);
 }

//  checkbox handle code
 const handleCheckboxChange = (wearType) => {
    setIsChecked(prevIsChecked => 
      prevIsChecked.includes(wearType) 
        ? prevIsChecked.filter(wear => wear !== wearType) 
        : [...prevIsChecked, wearType]
    );
 };

  // main filteredproducts code (this is the logic to the displayed products)
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Collections' || product.category === selectedCategory;
  
    // Check if the product matches any of the checked wear types
    const matchesCheckbox = isChecked.length === 0 || isChecked.includes(product.wear);
  
    // Check if the product matches any of the selected gender types
    const matchesGender = genderChange === 'All' || product.gender === genderChange;
  
    // Combine all the filters (category, wear, checkbox, gender)
    return matchesCategory && matchesCheckbox && matchesGender;
  });
  

  return (
    <div className='flex 3xl:mx-auto py-20 w-full'>
      {/* This is the sidebar code */}
      <div className='hidden md:block ml-5 md:ml-10 mr-5 pt-0 md:mt-10 w-[246px]'>

          {/* gender change code */}
          <ul className='text-xl font-semibold'>
              <li onClick={() => handleGender('All')} className={`py-4 cursor-pointer ${genderChange === 'All' ? 'text-blue-700' : ''}`}>All</li>
              <li onClick={() => handleGender('male')} className={`py-4 cursor-pointer ${genderChange === 'male' ? 'text-blue-700' : ''}`}>Men</li>
              <li  onClick={() => handleGender('female')} className={`py-4 cursor-pointer ${genderChange === 'female' ? 'text-blue-700' : ''}`}>Women</li>
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






      {/* displayed products code and selections */}
      <div className='mt-5 md:mt-10 w-full'>
        <div className='w-full '>
          <div className='flex items-center'>
          

          {/* Mobile filter */}
          <span className='md:hidden relative flex items-center text-lg pl-5 md:pl-10 pr-3 py-4 font-semibold text-gray-900'>Filter:</span> <div className='cursor-pointer md:hidden text-xl' onClick={()=> toggleFilter()}><HiMiniAdjustmentsHorizontal /></div>
          {filterOptions ? (
            <div className='md:hidden z-70'>
              <div className='left-0 mt-7 absolute bg-white w-full pb-10 shadow-xl border-t-2 border-black'  >

            <div className='block ml-5 md:ml-10 mr-5 pt-0 md:mt-10 w-[246px]'>
                <ul className='text-lg font-semibold'>
                    <li onClick={() => {handleGender('All')}} className={`py-4 cursor-pointer ${genderChange === 'All' ? 'text-blue-700' : ''}`}>All</li>
                    <li onClick={() => {handleGender('male')}} className={`py-4 cursor-pointer ${genderChange === 'male' ? 'text-blue-700' : ''}`}>Men</li>
                    <li onClick={() => {handleGender('female')}} className={`py-4 cursor-pointer ${genderChange === 'female' ? 'text-blue-700' : ''}`}>Women</li>
                </ul>


            {/* This is the checkbox code in the filter mobile */}
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

              </div>
            </div>
          ) : ""} 
          {/* Mobile filter ends here */}

         
          {/* This is the collections dropdown code */} 
          <div className="relative px-7 py-2 inline-block text-left" ref={closeDropdownRef}>
            <div>
              <button
                type="button"
                className="inline-flex items-center w-full justify-center gap-x-3 rounded-md bg-white px-3 py-2 text-lg font-semibold text-gray-900 "
                id="menu-button"
                onClick={() => toggleDropdownOptions()}>
                {selectedCategory}
                <div className='text-2xl font-bold'><HiChevronDown  /></div>
              </button>
            </div>
          
            {/* Dropdown options */}
            {dropdownOptions ? <div
              className="absolute left-5 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <div
                  onClick={()=> handleDropdown('Collections')}
                  className="block px-5 py-3 border-b-2 text-sm text-gray-700 hover:bg-blue-700 hover:text-white"
                >
                  Collections
                </div>
                <div
                  onClick={()=> handleDropdown('Wildthought')}
                  className="block px-5 py-3 border-b-2 text-sm text-gray-700 hover:bg-blue-700 hover:text-white"
                >
                  Wildthought
                </div>
                <div
                  onClick={()=> handleDropdown('Butterfly')}
                  className="block px-5 py-3 border-b-0 text-sm text-gray-700 hover:bg-blue-700 hover:text-white"
                >
                  Butterfly
                </div>
              </div>
            </div> : ""}
          </div>

      </div>
      {/* collection dropdown ends here */}

      {/* Products to be displayed code */}
      <div className='pb-10 px-5 md:px-10 md:pr-10 mt-5 md:mt-10 mr-0 md:mr-10 min-w-auto w-full'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 w-full'>
            {filteredProducts.map((product, id) => (
            <Productcard 
                product={product}
                key={id}/>
            ))}

            {filteredProducts.length === 0 ? 
            <div className='text-xl font-normal m-20 md:mx-auto w-full md:w-full'>No product found</div> : ""}
        </div>

      </div>
    </div>
  </div>
      {/* products code ends here */}
    
    </div>
  );
};

export default Productcards;
