import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { navItems } from '../data';
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [open,setOpen]=useState(false);
  return (
    <div className='flex justify-between bg-cyan-900 text-white p-4 font-bold text-xl'>
       <button className='md:hidden' onClick={()=>open? setOpen(false):setOpen(true)}>
       {
        open? <IoMdClose/> : <IoMenu/>
       }
       </button>
      <ul className={open? `${styles.smallNav}`:`${styles.hiddeNv}`}>
        {
          navItems.map((elm,i)=> 
          <Link to={elm.to} onClick={()=>setOpen(false)}>{elm.title}</Link>)
        }
      </ul>
      
      <p className='hidden md:inline'>Welcome To Online Book Store</p>
       <div className='hidden md:flex md:items-center md:gap-1'>
       <IoPersonOutline className='font-extrabold text-xl'/>
        <Link to="login" >login</Link>
       </div>
      </div>
  
  );
}
const styles ={
  smallNav:'flex flex-col gap-5 items-start ps-10 absolute left-0 top-10 bg-cyan-900 w-1/2 h-full z-10',
  hiddeNv:'w-0 hidden'
}