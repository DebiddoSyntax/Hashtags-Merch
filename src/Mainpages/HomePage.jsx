import React from 'react';
import Herosection from '../Components/HomePage/Herosection';
import Bestsellers from '../Components/HomePage/Bestsellers';
import Gallery from '../Components/HomePage/Gallery';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function HomePage() {

  const { pathname } = useLocation();
  useEffect(() => {
     window.scrollTo(0,0);
  }, [pathname])
  
  return (
    <div>
      <Herosection />
      <Bestsellers />
      <Gallery />
    </div>
  );
}

export default HomePage;
