import React, { useContext, useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Components/Assets/Logo.png';
import Logowhite from '../Components/Assets/Logowhite.png';
import { FiSearch } from "react-icons/fi";
import { HiOutlineX, HiOutlineMenuAlt3, HiOutlineUser, HiOutlineShoppingBag, HiChevronRight } from "react-icons/hi";
import { CartContext, ProductprofileContext } from './Functions/ContextProvider';
import Data from '../Components/Data.json'
import useClicktoClose from './Functions/useClicktoClose';




const FullProducts = Data.products;



const Productcard = ({ product, Click}) => {

  const {setProfile} = useContext(ProductprofileContext);

  return (
      <div className="max-w-96 md:max-w-sm bg-white overflow-hidden h-auto">
            <Link to="/productpage" onClick={()=>{setProfile(product)}}>
            <div className='bg-[#f2f2f2] p-5 w-full'>
              <div className='h-full w-full' onClick={Click}>
                <img className='h-40 w-full object-contain' src={product.image} alt={product.title} />
              </div>
            </div>
            </Link>
  
  
        <div className="py-5 max-w-full">
          <h3 className="text-[14px] font-semibold text-gray-800">{product.title}</h3>
          <p className="text-[14px] font-semibold text-blue-700 pt-2">₦{product.price}</p>
        </div>
  
        
      </div>
    );
  };



const Navbar = () => {

  const location = useLocation();

  const { pathname } = useLocation();
  useEffect(() => {
     window.scrollTo(0,0);
  }, [pathname])

  // this is the nav menu hamburger states
  const [nav, setNav] = useState(false);
  const handleNav = () => {
        setNav(!nav);
        setNavbarScroll(false)
      };
  // ends here


  // this is the search icon and search bar states
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setKeyword('')
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setFilteredProducts([])
    setKeyword('')
  };
  // ends here


  const {cart} = useContext(CartContext);

 
  const [keyword, setKeyword] = useState('');
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const closeSearchRef = useClicktoClose(() => {
    setSearchOpen(false);
  })

  const [navbarScroll, setNavbarScroll] = useState(false);

  const handleNavScroll = () => {
    if(window.scrollY <= 80) {
      setNavbarScroll(true)
    } else {
      setNavbarScroll(false)
    }
  }

 
  useEffect(() => {

    handleNavScroll();

    window.addEventListener('scroll', handleNavScroll);

    return () => window.removeEventListener('scroll', handleNavScroll);
 }, []);


 const navbarClass = () => {
  if (location.pathname === '/' && navbarScroll) {
    return 'fixed z-50 flex justify-between items-center text-white h-20 w-full px-5 md:px-10 bg-transparent';
  } else {
    return 'fixed z-50 flex justify-between items-center h-20 w-full text-black px-5 md:px-10 bg-[#F2F2F2] shadow-lg';
  }
};

const LogoSRC = () => {
  if (location.pathname === '/' && navbarScroll) {
    return Logowhite;
  } else {
    return Logo;
  }
};



  useEffect(() => {
    if (keyword.trim() !== '') {
      const results = FullProducts.filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
 }, [keyword]);
 



  return (
    <header>
        <nav className={navbarClass()}>
          
          {/* this is the logo */}
          <div>
            <div className='w-[100%] md:w-full h-10'>
              <Link to="/"><img className="max-w-full max-h-full object-cover object-center" src={LogoSRC()} alt="Logo" /></Link>
            </div>
          </div>
          {/* ends here */}

          {/* this is the main navigation */}
          <ul className='h-16 hidden md:flex text-lg'>
            <li className='p-5 hover:text-blue-700'>
              <Link to="/">Home</Link>
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
          <div className='flex items-center mx-0 py-1 px-0'>
              <div className=' text-2xl md:text-2xl stroke-2 cursor-pointer hover:text-blue-700'><HiOutlineShoppingBag /></div>
              {cart.length<1 ? <sup></sup>: <sup className='px-2 py-[9px] text-[10px] text-white rounded-full bg-red-600'>{cart.length}</sup>}
              </div> 
          </Link>
              <div className='mx-1 p-1 text-2xl md:text-2xl stroke-2 cursor-pointer hover:text-blue-700'><FiSearch onClick={toggleSearch}/></div>

                  {/* this is the search bar code */}
                    {searchOpen ? (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col" >
                        <div className='w-[100%]' ref={closeSearchRef} >
                          <div className="flex bg-[#f2f2f2] py-4 px-5 md:px-10 w-[100%] items-center" onClick={(e) => e.stopPropagation()}>
                            <div className='w-[70%] md:w-[50%] mx-auto px-5 flex items-center bg-white rounded-lg border border-gray-300'>
                              <input type="text" placeholder="Search for product" className='w-[100%] text-black p-3 focus:outline-none focus:border-transparent' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                             <FiSearch className='text-2xl text-gray-600 mx-1 hover:text-blue-700'  />
                            </div>
                            <HiOutlineX className='text-2xl text-black mx-5 cursor-pointer hover:text-blue-700' onClick={closeSearch}/>
                          </div> 
                        </div>


                        {filteredProducts.length < 1? <div></div> :
                        <div className='w-full mx-auto bg-[#ffffff] h-[90%] mt-3 ' ref={closeSearchRef}>
                          
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full mt-10 px-5 md:px-10'>
                                  {filteredProducts.map((product, id) => (
                                  <Productcard 
                                      product={product}
                                      key={id}
                                      Click={() => {closeSearch()
                                        setFilteredProducts([])
                                        setKeyword('')}
                                      }
                                      />
                                  ))}
                            </div>
                        </div>}
                      </div>
                    ) : ""}
                    
                    {/* the search bar code ends here */}

                    <Link to="/login"> <div className='hidden md:flex px-1 text-2xl md:text-2xl cursor-pointer hover:text-blue-700'> <HiOutlineUser /> </div> </Link>
          
              <div className='flex text-2xl items-center px-0 md:hidden' onClick={handleNav}>
                {nav ? <div className='text-[26px] stroke-2 hover:text-blue-700'><HiOutlineX /></div> : <div className='text-[26px] stroke-2 hover:text-blue-700'><HiOutlineMenuAlt3 /></div>}
              </div>
          </div>
          {/* the nav icons end here */}        
        </nav>

{/* this is the hamburger menu slider */}
<div className={nav ? 'z-50 fixed top-[76px] w-[100%] h-[100%] bg-white p-4 shadow-xl ease-in-out duration-800 md:hidden' : 'fixed top-[-100%]'}>
            <ul className='pt-4 bg-[#f2f2f2]'>
              <li className='p-5'>
                <Link to="/" className='flex items-center justify-between hover:text-blue-700' onClick={handleNav}>HOME <span className='text-xl'><HiChevronRight /></span></Link>
              </li>
              <li className='p-5'>
                <Link to="/store" className='flex items-center justify-between hover:text-blue-700' onClick={handleNav}>STORE <span className='text-xl'><HiChevronRight /></span></Link>
              </li>
              <li className='p-5'>
                <Link to="/contact" className='flex items-center justify-between hover:text-blue-700' onClick={handleNav}>CONTACT US <span className='text-xl'><HiChevronRight /></span></Link>
              </li>
            </ul>


            <div className='mt-10 px-4 py-6 border-y-2'>
              <Link to="/login"><h3 className='flex items-center justify-between hover:text-blue-700' onClick={handleNav}>MY ACCOUNT <span className='text-xl'><HiOutlineUser /></span></h3></Link>
            </div>

        </div>
  {/* hamburger menu slider ends here */}
</header>
  );
}

export default Navbar;
