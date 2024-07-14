import React from 'react';
import { navItems } from '../data';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <ul className='hidden bg-gray-200  md:flex gap-4 justify-center p-6 font-bold text-gray-800'>
       
      { 
        navItems.map((elm,i)=><li key={i}>
                    <Link to={elm.to}>{elm.title}</Link>
                </li>
        )
      }
    </ul>
  );
}
