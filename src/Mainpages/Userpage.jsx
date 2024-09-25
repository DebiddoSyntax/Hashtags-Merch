import {React, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';


const Userpage = () => {
    const { pathname } = useLocation();
        useEffect(() => {
        window.scrollTo(0,0);
        }, [pathname]);


  return (
    <div className='py-20 px-5 md:px-10'>
        <div className='pt-3 md:pt-7 grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='col-span-2'>
                <h2 className='py-3 border-b-2 border-black font-semibold text-xl uppercase'>Account Details</h2>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='col-span-2'>
                        <h4 className='text-lg font-semibold mt-5 md:mt-3'>Name</h4>
                        <p className='text-lg font-light'>Michael David</p>


                        <h4 className='text-lg font-semibold mt-5 md:mt-3'>Address</h4>
                        <p className='text-lg font-light'>No. 9 Florentine street, Lagos State, Nigeria, 10001</p>

                        <h4 className='text-lg font-semibold mt-5 md:mt-3'>Email</h4>
                        <p className='text-lg font-light no-underline'>Davidmichael@gmail.com</p>

                        <h4 className='text-lg font-semibold mt-5 md:mt-3'>Phone number</h4>
                        <p className='text-lg font-light no-underline'>+2349138631824</p>
                    </div> 
                    <p className='text-lg font-semibold text-blue-700 text-left mt-3 w-full cursor-pointer'>view payment details</p>
                </div>
            </div>


            <div>
                <h2 className='py-3 border-b-2 border-black  font-semibold text-xl uppercase'>Order History</h2>
                <p className='text-lg font-light italic mt-5 md:mt-3'>No order history</p>
            </div>
        </div>
        <Link to='/login'>
            <div className='mt-10 text-xl text-red-600 font-semibold cursor-pointer w-24'>Sign out</div>
        </Link>
    </div>
  )
}

export default Userpage