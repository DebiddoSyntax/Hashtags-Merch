import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black h-auto'>
            <div className='px-5 md:px-10 h-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-7 md:py-10 pb-10 md:pb-14 border-b-2 border-solid'>

                    <div className='h-auto md:col-span-2'> 
                        
                        <h2 className='font-semibold text-white text-lg md:text-xl py-2'>Be the first to know</h2>
                        <p className='text-sm md:text-lg font-normal text-white py-2'>Join our email list to learn about exclusive deals and new collections.</p>
                        
                        <div className='flex pt-5  w-[100%] items-center'>
                            <div className='w-[440px]'>
                                <input 
                                type="email" 
                                placeholder='Enter your email address' 
                                className='bg-white w-[95%] md:-[80%] h-full py-4 px-4 rounded text-sm focus:outline-none'/> 
                            </div>

                            <div>
                                <Button className="text-sm items-center h-full w-[103px] md:w-[127px] bg-blue-700 text-white hover:bg-blue-800" 
                                onClick={() => alert('Subscribed!')}>
                                Subscribe 
                                </Button>
                            </div>

                        </div>

                    </div>

                    <div>
                        <p className='font-semibold text-white text-lg md:text-xl py-2'>Social Links</p>
                        <div className='flex items-center h-[48px]'>
                            <ImFacebook2 className='text-white text-3xl md:text-4xl pr-2' />
                            <FaSquareTwitter className='text-white text-3xl md:text-4xl pr-2' />
                            <FaSquareInstagram className='text-white text-3xl md:text-4xl pr-2' />
                        </div>
                    </div>

                </div>



                <div className='mt-5 mx-auto items-center w-[80%] md:w-[70%]'>
                    <h2 className='font-semibold text-white text-xl md:text-2xl py-1 text-center'>Quick Links</h2>

                    <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 pt-3 md:pt-6 text-lg md:text-xl font-normal md:font-normal text-white text-center'>
                        <li className='p-2 hover:text-blue-700'>About us</li>
                        <li className='p-2 hover:text-blue-700'><Link to="/contact">Contact us</Link></li>
                        <li className='p-2 hover:text-blue-700'>Size Guide</li>
                        <li className='p-2 hover:text-blue-700'>Terms of service</li>
                        <li className='p-2 hover:text-blue-700'>Shipping policy</li>
                        <li className='p-2 hover:text-blue-700'>Return policy</li>
                    </ul>
                </div> 

            </div>



            <div className='mt-7 py-2 text-white items-center text-xs md:text-sm text-center border-t-[1px] border-solid'>
                <p>@HashtagsMerch <sup>TM</sup></p>
            </div>
    </div>
  )
}

export default Footer