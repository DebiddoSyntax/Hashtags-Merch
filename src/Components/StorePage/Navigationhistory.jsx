import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Navigationhistory = () => {
  return (
    <div className='bg-[#ffff]'>

        {/* Navigation history code */}
        <div className='mb-5 pt-20 flex px-5 md:px-10 pb-3 text-sm md:text-lg font-medium items-center border-b-[3px] border-solid border-gray-400'>
            <h3 className='pl-0 pr-3 pt-2 text-gray-600'>Store</h3>
            <div className='px-1 pt-2 text-gray-600 text-lg md:text-xl'><MdOutlineArrowForwardIos /></div>
            <h3 className='px-3 pt-2 text-gray-900'>All</h3>
        </div>
    
    
    </div>
  )
}

export default Navigationhistory