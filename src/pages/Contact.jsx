import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
export default function Contact() {
  return (
    <div className='flex flex-col bg-gray-200'>
     <div className='flex flex-col justify-center items-center gap-20  lg:flex-row lg:justify-evenly p-5'>
     <div className='flex flex-col gap-3 items-center font-bold '>
       <FaHome className='text-5xl'/>
        <p className='text-2xl'>Address</p>
        <p>Egypt-cario</p>
      </div>
      <div className='flex flex-col gap-3 items-center font-bold '>
       <FaPhone className='text-5xl'/>
        <p className='text-2xl'>phone</p>
        <p>123-456-789</p>
      </div>
      <div className='flex flex-col gap-3 items-center font-bold '>
       <MdEmail className='text-5xl'/>
        <p className='text-2xl'>email</p>
        <p>info@bookstore.com</p>
      </div>
     </div>
     <hr className='border-gray-500'/>
     <p className='font-bold text-2xl text-center ps-5 mb-6 mt-5'>Contact us Form</p>
     <div className='flex flex-col gap-5 items-center lg:flex-row lg:flex-wrap justify-center '>
      <div className='flex flex-col items-center gap-5 lg:w-3/4 lg:flex-row lg:justify-between w-5/6'>
      <input type="text"  placeholder='name' className='p-3 rounded-xl w-full '/>
      <input type="text"  placeholder='subject' className='p-3 rounded-xl w-full '/>
      <input type="email"  placeholder='email' className='p-3 rounded-xl w-full  '/>
      </div>
      <textarea name="" id="" placeholder='your message' className='p-3 rounded-xl w-5/6 lg:w-3/4 lg:ps-6 lg:pe-6'></textarea>
      <button className='bg-yellow-700 text-white w-5/6 rounded-full p-3 mb-9 text-xl font-bold lg:w-1/4'>submit</button>
     </div>
    </div>
  );
}
