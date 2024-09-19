import React from 'react'
import Button from '../Components/Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'





const ContactUs = () => {

  const { pathname } = useLocation();
  useEffect(() => {
     window.scrollTo(0,0);
  }, [pathname])
  

    const onSubmit = ( data) => {
        console.log(data);
    }
      
    const schema = yup.object({
        name: yup.string().required("Please enter your name"),
        email: yup.string().email("Kindly enter a valid email").required("Please enter your email"),
        number: yup.string().matches(/^[0-9]+$/, "Please enter a valid number").required("Please enter your number"),
        message: yup.string()
    });
    
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
  


  return (
    <div className='pt-20'>
      <div className='text-center my-10  px-5 md:px-10'>
          <h1 className='text-2xl md:text-3xl font-semibold py-2 md:py-3'>Get in touch</h1>
          <p className='text-lg md:text-xl font-normal py-2 md:py-3'>
              We are here to help as much as we can, check out our FAQs for any questions or contact us below.
          </p>
          <Button className=" mt-5 md:mt-10 text-lg font-semibold items-center h-full w-40  bg-blue-700 text-white hover:bg-blue-800" 
              onClick={() => alert('Primary Button Clicked!')}>
              FAQ
        </Button>
      </div>


      <div className='flex my-16  px-5 md:px-10 text-sm md:text-lg items-center'>
          <div className='text-center items-center mx-2 md:mx-5'>
            <div className='flex items-center justify-center text-2xl md:text-4xl py-3'><FaLocationDot /></div>
            <p className='font-normal py-2 md:py-3'>3 Dreamworld Africana Way, Lekki Penninsula II, Lekki, Nigeria</p>
          </div>

          <div className='text-center items-center mx-2 md:mx-5 px-5 py-8 bg-[#f2f2f2]'>
            <div className='flex items-center justify-center text-2xl md:text-4xl py-3'><FaPhone /></div>
            <p className='font-normal py-2 md:py-3'>3 Dreamworld Africana Way, Lekki Penninsula II, Lekki, Nigeria</p>
          </div>

          <div className='text-center mx-2 md:mx-5'>
            <div className='flex items-center justify-center text-2xl md:text-4xl py-3'><IoMail /></div>
            <p className='font-normal py-2 md:py-3'>3 Dreamworld Africana Way, Lekki Penninsula II, Lekki, Nigeria</p>
          </div>
      </div>


      <div className='h-[504px] my-28'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6164023138363!2d3.540816974994843!3d6.443276024090408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7017f9fc50f%3A0x2ed273c51e74d233!2s3%20Orchid%20Rd%2C%20Ikota%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1726407707737!5m2!1sen!2sng" 
          width="100%" height="100%" allowfullscreen="" 
          loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map' className=''>
          </iframe>
      </div>


      <div className='my-20'>
        <p className='text-center text-xl md:text-2xl font-semibold text-blue-700'>More enquiry? Send us a message.</p>
      <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)} className='my-10 text-center bg-[#f2f2f2] py-10 px-10 mx-10 md:mx-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
                  <div className="mb-5 flex flex-col  items-start text-left w-full">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-4 mr-4">Name</label>
                    <input type="text" id="name" name="name" placeholder='Enter your name' className=" w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none" 
                    {...register('name')}>
                    </input>
                    <p className='text-red-700 text-sm'>{errors.name?.message}</p>
                  </div>

                  <div className="mb-5 flex flex-col  items-start text-left w-full">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-4 mr-4">Email</label>
                    <input type="email" id="email" name="email" placeholder='Enter email' className=" w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none"
                    {...register('email')}>
                    </input>
                    <p className='text-red-700 text-sm'>{errors.email?.message}</p>
                  </div>
                  
                  <div className="mb-5 flex flex-col  items-start text-left w-full">
                    <label htmlFor="number" className="text-sm font-medium text-gray-700 mb-4 mr-4">Phone Number</label>
                    <input type="number" id="number" name="number" placeholder='Enter phone number' className=" w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none"
                    {...register('number')}>
                    </input>
                    <p className='text-red-700 text-sm'>{errors.number?.message}</p>
                  </div>
            </div>


            <div>
                  <div className="mb-5 flex flex-col  items-start text-left w-full h-full">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-4 mr-4">Your Message</label>
                    <div className='w-[100%] h-[260px] p-3 border border-gray-300 rounded-md focus:outline-none bg-white'>
                      <textarea type="text" id="message" name="message" placeholder='Message' className="w-full h-full resize-none p-3 focus:outline-none" {...register('message')}></textarea>
                    </div>
                    <p className='text-red-700 text-sm'>{errors.message?.message}</p>
                  </div>
            </div>
        </div>


        <Button type='submit' className=" mt-5 md:mt-10 text-sm items-center h-full w-40 place-items-center bg-blue-700 text-white hover:bg-blue-800">
        Submit
        </Button>
      </form>
      </div>






    </div>
  )
}

export default ContactUs