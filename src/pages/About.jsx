import React from 'react';

export default function About() {
  return (
    <div className='bg-gray-200 ps-6 flex flex-col gap-4 h-96'>
      <hr className='border-gray-500'/>
      <h1 className='font-extrabold text-2xl text-gray-500 underline mt-6'>About Us</h1>
     
    
      <p className='text-xl'>We are an online book store</p>
      <p className='font-bold text-xl'>Version: 1.0.0</p>
    </div>
  );
}
