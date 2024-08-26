import React, { useContext, useState } from 'react';
// import ButterflyShirt from '../Assets/Butterflytshirt.png';
import { FaStar } from "react-icons/fa";
import Data from "../Data.json"
import { CartContext } from '../Functions/ContextProvider';


// this is the products details fetched from json
const products = Data.products; 

// Single card code
const Productcard = ({ product }) => {

  const {dispatch} = useContext(CartContext);

  return (
    <div className="max-w-96 mx-auto md:max-w-sm bg-white overflow-hidden ">
      <div className='bg-[#F2F2F2] p-5 md:p-10 w-full flex flex-col items-center'>
        <img className="w-full object-cover object-center" src={product.image} alt={product.title} />
      </div>  
      <div className="py-5 max-w-full">
        <h3 className="text-[14px] md:text-[16px] font-semibold text-gray-800">{product.title}</h3>
        <p className="text-[14px] md:text-[16px] font-semibold text-blue-700 pt-2">{product.price}</p>
        <div className='flex pt-2'>
          <FaStar color='#FFD700' fontSize={18} />
          <FaStar color='#FFD700' fontSize={18} />
          <FaStar color='#FFD700' fontSize={18} />
          <FaStar color='#FFD700' fontSize={18} />
        </div>
      </div>

      <button className='px-3 py-2 w-full border-[2.5px] text-sm font-medium border-blue-700 hover:bg-blue-700 hover:text-white' 
      onClick={() => dispatch({ type: "Add", product: product})}>Add to cart</button>
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
    <div className='flex'>
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




      <div className='mt-10'>
        <div>
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
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                  {filteredProducts.map((product, id) => (
                  <Productcard 
                      product={product}
                      key={product.id} />
                  ))}
              </div>

              <p className='items-center text-center'>This is a nav button</p>
            </div>
        </div>
      </div>
      {/* code ends here */}
    </div>
  );
};

export default Productcards;
