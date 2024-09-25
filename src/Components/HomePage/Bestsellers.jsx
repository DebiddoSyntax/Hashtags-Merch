import React, { useContext}from 'react'
import Button from '../Button';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Data from '../Bestsellers.json'
import {ProductprofileContext } from '../Functions/ContextProvider';

const BestsellersData = Data.products;


const Productcard = ({ product}) => {


  const {setProfile} = useContext(ProductprofileContext);


  return (
      <div className="max-w-96 md:max-w-sm bg-white overflow-hidden h-auto">
            <Link to="/productpage" onClick={()=>{setProfile(product)}}>
              <div className='bg-[#f2f2f2] p-3 md:p-5 w-full'>
                <div className='h-full w-full'>
                  <img className='h-40 w-40 md:h-64 md:w-64 object-contain' src={product.image} alt={product.title} />
                </div>
              </div>
           
  
  
        <div className="py-5 max-w-full">
          <h3 className="text-[14px] font-semibold text-gray-800">{product.title}</h3>
          <p className="text-[14px] font-semibold text-blue-700 pt-2">₦{product.price}</p>
              <div className='flex pt-2'>
                <FaStar color='#FFD700' fontSize={18}/>
                <FaStar color='#FFD700' fontSize={18}/>
                <FaStar color='#FFD700' fontSize={18}/>
                <FaStar color='#FFD700' fontSize={18}/>
              </div>
        </div>
        </Link>
  
        
      </div>
    );
  };


const Bestsellers = () => {
  return (
    // this is the component parent div //
    <div className='flex flex-col items-center h-auto mx-auto mt-12 md:mt-20 px-5 md:px-10'> 
        <h1 className='mt-7 text-2xl md:text-3xl lg:text-3xl font-semibold text-blue-700'>Our Best Sellers</h1>
        
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5 mt-5 md:mt-10'>
          
        {BestsellersData.map((product, id) => (
                  <Productcard 
                      product={product}
                      key={id}/>
                  ))}


        </div>

        <Link to="/store">
          <Button className=" mt-5 md:mt-10 text-lg items-center h-full w-80  bg-blue-700 text-white hover:bg-blue-800">
          View Store
          </Button>
        </Link>
  
    </div>


   
  )
}

export default Bestsellers