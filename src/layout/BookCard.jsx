import React from 'react';
import book1 from '../assets/book1.png'

export default function BookCard(props) {
  return (
    <div className=' border-2 border-cyan-900 rounded w-80 flex flex-col items-center mt-5 p-3'>
      <img src={props.image} alt="" className='w-56'/> 
      <div>
        <p className='font-bold  text-xl'>{props.title}</p>
        <p className='font-bold text-center'>${props.id}</p>
      </div>
      <button className='bg-yellow-700 text-white font-bold rounded-full p-3'>show details</button>
    </div>
  );
}
