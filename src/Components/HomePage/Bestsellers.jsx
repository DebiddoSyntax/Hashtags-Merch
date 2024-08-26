import React from 'react'
import Butterfyshirt from '../Assets/Butterflytshirt.png'
import Button from '../Button';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Bestsellers = () => {
  return (
    // this is the component parent div //
    <div className='flex flex-col items-center h-auto  mx-auto mt-12 md:mt-20 px-5 md:px-10'> 
        <h1 className='mt-7 text-2xl md:text-3xl lg:text-3xl font-semibold text-blue-700'>Our Best Sellers</h1>
        
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 mt-5 md:mt-10'>
          

              {/* Product card1 */}
              <div className=" max-w-96 mx-auto md:max-w-sm bg-white overflow-hidden">
                  
                  {/* image */}
                  <div className='group bg-[#F2F2F2] p-5 md:p-10 flex flex-col items-center'>
                      <img className="w-full h-30 object-cover object-center" src={Butterfyshirt} alt="Product" />
                      
                      {/* Hover Button */}
                      <button className='opacity-0 md:opacity-0 md:group-hover:opacity-100 md:absolute md:mt-44 md:py-3 md:px-14 md:bg-blue-700 md:text-white md:text-sm md:rounded-sm md:shadow-md md:transition-opacity md:duration-300)'>
                        Go to profile
                      </button>
                  </div> 

                  {/* card details */}
                  <div className="py-5 max-w-96">
                      <h3 className="text-[16px] md:text-[20px] font-semibold text-gray-800">Butterfly T-shirt</h3>
                      <p className="text-[16px] md:text-[20px] font-semibold text-blue-700 pt-2">₦187,340</p>
                      <div className='flex pt-2'>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                      </div>
                  </div>

              </div>





              {/* Product card2 */}
              <div className=" max-w-96 mx-auto md:max-w-sm bg-white overflow-hidden">
                  
                  {/* image container*/}
                  <div className=' group bg-[#F2F2F2] p-5 md:p-10 flex flex-col items-center'>
                      <img className="w-full h-30 object-cover object-center" src={Butterfyshirt} alt="Product" />
                      
                      {/* Hover Button */}
                      <button className='opacity-0 group-hover:opacity-100 absolute mt-44 py-3 px-14 bg-blue-700 text-white text-sm rounded-sm shadow-md transition-opacity duration-300'>
                        Go to profile
                      </button>
                  </div> 

                  {/* card details */}
                  <div className="py-5 max-w-96">
                      <h3 className="text-[16px] md:text-[20px] font-semibold text-gray-800">Butterfly T-shirt</h3>
                      <p className="text-[16px] md:text-[20px] font-semibold text-blue-700 pt-2">₦187,340</p>
                      <div className='flex pt-2'>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                      </div>
                  </div>
                  
              </div>






              {/* Product card3 */}
              <div className=" max-w-96 mx-auto md:max-w-sm bg-white overflow-hidden">
                  
                  {/* image container*/}
                  <div className=' group bg-[#F2F2F2] p-5 md:p-10 flex flex-col items-center'>
                      <img className="w-full h-30 object-cover object-center" src={Butterfyshirt} alt="Product" />
                      
                      {/* Hover Button */}
                      <button className='opacity-0 group-hover:opacity-100 absolute mt-44 py-3 px-14 bg-blue-700 text-white text-sm rounded-sm shadow-md transition-opacity duration-300'>
                        Go to profile
                      </button>
                  </div> 

                  {/* card details */}
                  <div className="py-5 max-w-96">
                      <h3 className="text-[16px] md:text-[20px] font-semibold text-gray-800">Butterfly T-shirt</h3>
                      <p className="text-[16px] md:text-[20px] font-semibold text-blue-700 pt-2">₦187,340</p>
                      <div className='flex pt-2'>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                      </div>
                  </div>
                  
              </div>




              {/* Product card4 */}
              <div className=" max-w-96 mx-auto md:max-w-sm bg-white overflow-hidden">
                  
                  {/* image container*/}
                  <div className=' group bg-[#F2F2F2] p-5 md:p-10 flex flex-col items-center'>
                      <img className="w-full h-30 object-cover object-center" src={Butterfyshirt} alt="Product" />
                      
                      {/* Hover Button */}
                      <button className='opacity-0 group-hover:opacity-100 absolute mt-44 py-3 px-14 bg-blue-700 text-white text-sm rounded-sm shadow-md transition-opacity duration-300'>
                        Go to profile
                      </button>
                  </div> 

                  {/* card details */}
                  <div className="py-5 max-w-96">
                      <h3 className="text-[16px] md:text-[20px] font-semibold text-gray-800">Butterfly T-shirt</h3>
                      <p className="text-[16px] md:text-[20px] font-semibold text-blue-700 pt-2">₦187,340</p>
                      <div className='flex pt-2'>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                        <FaStar color='#FFD700' fontSize={18}/>
                      </div>
                  </div>
                  
              </div>




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