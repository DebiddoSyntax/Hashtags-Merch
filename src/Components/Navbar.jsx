import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Assets/Logo.png';
import { FiSearch } from "react-icons/fi";
import { HiOutlineX, HiOutlineMenuAlt3, HiOutlineUser, HiOutlineShoppingBag, HiChevronRight } from "react-icons/hi";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter, FaSquareInstagram } from "react-icons/fa6";
import { CartContext } from './Functions/ContextProvider';
// import { useContext } from 'react';
// import ContextProvider from './Functions/ContextProvider';






const Navbar = () => {

  // const cart = useContext(ContextProvider)

  // this is the nav menu hamburger states
  const [nav, setNav] = useState(false);
  const handleNav = () => {
        setNav(!nav);
      };
  // ends here


  // this is the search icon and search bar states
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };
  // ends here


  const {cart} = useContext(CartContext);



  return (
    <header>
        <nav className='fixed flex justify-between items-center h-20 w-full px-5 md:px-10 bg-[#F2F2F2] shadow-lg min-w-screen'>
          
          {/* this is the logo */}
          <div>
            <div className='w-[100%] md:w-full h-10'>
              <Link to="/Home"><img className="max-w-full max-h-full object-cover object-center" src={Logo} alt="Logo" /></Link>
            </div>
          </div>
          {/* ends here */}

          {/* this is the main navigation */}
          <ul className='h-16 hidden md:flex text-lg'>
            <li className='p-5 hover:text-blue-700'>
              <Link to="/Home">Home</Link>
            </li>
            <li className='p-5 hover:text-blue-700'>
              <Link to="/store">Store</Link>
            </li>
            <li className='p-5 hover:text-blue-700'>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          {/* ends here */}
          
          {/* this is the navbar icons */}
          <div className='flex justify-between h-16 items-center px-0'>
          <Link to="/cart">
          <div className='flex items-center mx-1 py-1 px-0'>
              <div className=' text-2xl md:text-2xl stroke-2 cursor-pointer hover:text-blue-700'><HiOutlineShoppingBag /></div>
              {cart.length<1 ? <sup></sup>: <sup className=' bg-red-600'>{cart.length}</sup>}
              </div> 
          </Link>
              <div className='mx-1 p-1 text-2xl md:text-2xl stroke-2 cursor-pointer hover:text-blue-700'><FiSearch onClick={toggleSearch}/></div>

                  {/* this is the search bar code */}
                    {searchOpen ? (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex" >
                        <div className='w-[100%]'>
                          <div className="flex bg-[#f2f2f2] py-4 px-5 md:px-10 w-[100%] items-center" onClick={(e) => e.stopPropagation()}>
                            <div className='w-[70%] md:w-[50%] mx-auto px-5 flex items-center bg-white rounded-lg border border-gray-300'>
                              <input type="text" placeholder="Search..." className='w-[100%]  p-3 focus:outline-none focus:border-transparent '/>
                              <FiSearch className='text-2xl text-gray-600 mx-1 hover:text-blue-700' />
                            </div>
                            <HiOutlineX className='text-2xl mx-5 cursor-pointer hover:text-blue-700' onClick={closeSearch}/>
                          </div> 
                        </div>
                      </div>
                    ) : ""}
                    {/* the search bar code ends here */}

              <div className='hidden md:flex px-1 text-2xl md:text-2xl cursor-pointer hover:text-blue-700'> <HiOutlineUser /> </div>
          
              <div className='flex text-2xl items-center px-0 md:hidden' onClick={handleNav}>
                {nav ? <div className='text-[26px] stroke-2 hover:text-blue-700'><HiOutlineX /></div> : <div className='text-[26px] stroke-2 hover:text-blue-700'><HiOutlineMenuAlt3 /></div>}
              </div>
          </div>
          {/* the nav icons end here */}        
        </nav>

{/* this is the hamburger menu slider */}
<div className={nav ? 'fixed top-[76px] w-[100%] h-[100%] bg-white p-4 shadow-xl ease-in-out duration-800 md:hidden' : 'fixed top-[-100%]'}>
            <ul className='pt-4 bg-[#f2f2f2]'>
              <li className='p-5'>
                <Link to="/home" className='flex items-center justify-between hover:text-blue-700' onClick={handleNav}>HOME <span className='text-xl'><HiChevronRight /></span></Link>
              </li>
              <li className='p-5'>
                <Link to="/store" className='flex items-center justify-between hover:text-blue-700' onClick={handleNav}>STORE <span className='text-xl'><HiChevronRight /></span></Link>
              </li>
              <li className='p-5'>
                <Link to="/contact" className='flex items-center justify-between hover:text-blue-700' onClick={handleNav}>CONTACT US <span className='text-xl'><HiChevronRight /></span></Link>
              </li>
            </ul>


            <div className='mt-10 px-4 py-6 border-y-2'>
              <h3 className='flex items-center justify-between hover:text-blue-700'>MY ACCOUNT <span className='text-xl'><HiOutlineUser /></span></h3>
            </div>

            <div className='flex items-center text-center mt-16'>
                    <div className='mx-1 p-1 text-2xl stroke-2'><ImFacebook2 /></div>
                    <div className='mx-1 p-1 text-3xl stroke-2'><FaSquareTwitter /></div>
                    <div className='mx-1 p-1 text-3xl stroke-2'><FaSquareInstagram /></div>
            </div>
        </div>
  {/* hamburger menu slider ends here */}
</header>
  );
}

export default Navbar;
