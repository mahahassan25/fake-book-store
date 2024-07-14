import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { navItems } from '../data';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='bg-yellow-700 p-5 text-white '>
      <div className='flex flex-col gap-3  lg:flex-row mt-5 lg:justify-between lg:items-center'>
        <p className='font-bold text-xl'>follow us on social media</p>
        <div className='flex gap-5'>
            <div className='w-12 h-12 rounded-full boreder bg-white flex justify-center items-center'>
            <FaInstagram className='font-bold text-2xl text-pink-800'/>
            </div>
            <div className='w-12 h-12 rounded-full boreder bg-white flex justify-center items-center'>
            <FaFacebook className='font-bold text-2xl text-blue-800'/>
            </div>
            <div className='w-12 h-12 rounded-full boreder bg-white flex justify-center items-center'>
            <FaYoutube className='font-bold text-2xl text-red-600'/>
            </div>
            <div className='w-12 h-12 rounded-full boreder bg-white flex justify-center items-center'>
            <FaTwitter className='font-bold text-2xl text-sky-600'/>
            </div>
        </div>
      </div>
      <hr className='mt-6'/>
     <div className='mt-6 flex flex-wrap justify-between'>
          <div className='flex flex-col gap-4 font-bold lg:w-1/3'>
          <p className='text-xl underline'>usefual links</p>
          <ul className='flex flex-col gap-2'>
                 {
                   navItems.map((elm,i)=> <Link to={elm.to} >{elm.title}</Link>)
                 }
         </ul>
          </div>
          <div className='flex flex-col gap-4 font-bold lg:w-1/3'>
              <p className='text-xl underline'>Contact Information</p>
              <div className='flex flex-col gap-4'> 
                   <div className='flex items-center gap-2'>
                     <IoLocationSharp className='text-3xl'/>
                     <span className='text-xl'>Egypt - Cairo</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaPhoneAlt className='text-3xl'/>
                    <span className='text-xl'>123-456-789</span>
                  </div>
                 <div className='flex items-center gap-2'>
                    <MdEmail className='text-3xl'/>
                    <span className='text-xl'>info@g.com</span>
                  </div>
              </div>
          </div>
          <div className='flex flex-col gap-3 lg:w-1/3'>
            <p className='text-bold text-2xl underline '>About us</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aperiam fugiat ullam distinctio iusto sunt,
              numquam, quis reiciendis pariatur error itaque? Voluptatem
              libero maiores eveniet fugiat provident architecto minima
              pariatur! Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.
              Aliquam perferendis nemo hic laborum aspernatur.
            </p>
          </div>
      </div>
     </div>
  );
}
