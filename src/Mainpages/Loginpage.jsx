import { React, useEffect } from 'react'
import Button from '../Components/Button'
import { Link, useLocation } from 'react-router-dom';



const Loginpage = () => {


const { pathname } = useLocation();
useEffect(() => {
    window.scrollTo(0,0);
}, [pathname]);

  return (
    <div className='pt-20 px-5 md:px-20'>
        <div className=' my-10 mx-auto md:w-96 w-full'>
            <h1 className='text-3xl font-semibold text-blue-700'>Log In</h1>
            <h3 className='my-3 font-semibold text-gray-500'>Welcome Back! Enter your details</h3>
            <form action="#" method="POST" className=''>
                <div className="mb-5 mt-10 items-start text-left w-full">
                    <label htmlFor="username" className="text-sm font-semibold text-black">Email</label>
                    <input type="email" id="email" name="email" placeholder='Enter your email'
                            className=" w-full p-3 border mt-2 border-gray-300 rounded-md focus:outline-none" >
                    </input>
                </div>

                <div className="mb-5 mt-7 items-start text-left w-full">
                    <label htmlFor="password" className="text-sm font-semibold text-black">Password</label>
                    <input type="password" id="username" name="password" placeholder='Enter your password'
                            className=" w-full p-3 border mt-2 border-gray-300 rounded-md focus:outline-none" >
                    </input>
                </div>
                
                <Link to='/user'>
                    <Button type='submit' className=" mt-5 md:mt-10 text-sm items-center h-full w-full place-items-center bg-blue-700 text-white hover:bg-blue-800">
                        Log In
                    </Button>
                </Link>
            
            </form>
            <p className='mx-auto text-center text-lg font-semibold mt-7'>Don’t have an account? <span className='text-blue-700'>Sign up</span></p>
        </div>
    </div>
  )
}

export default Loginpage;