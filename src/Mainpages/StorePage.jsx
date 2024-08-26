import React from 'react'
import Navigationhistory from '../Components/StorePage/Navigationhistory'
import Productcards from '../Components/StorePage/Productcards'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const StorePage = () => {

  const { pathname } = useLocation();
  useEffect(() => {
     window.scrollTo(0,0);
  }, [pathname])
  
  return (
    <div>
      <Navigationhistory />
      <div className='flex'>
      <Productcards />
    </div>
      

    </div>
  )
}

export default StorePage