import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
export default function Header2() {
  return (
    <div className='flex justify-between items-center bg-cyan-900 text-white p-5 '>
      <div className='hidden md:flex items-center font-bold gap-1 text-xl'>
        <span>Book</span>
        <FaBookOpen />
        <span>store</span>
      </div>
      <div>
        <input type="text" className='rounded-3xl w-80  lg:w-96 p-3 text-black' placeholder='search in book store'/>
      </div>
     <div className='hidden md:inline'>
     <FaCartShopping className='text-3xl font-extrabold'/>
     </div>
    </div>
  );
}
