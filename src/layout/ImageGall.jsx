import React from 'react';

export default function ImageGall(props) {
  return (
    <div class={`h-96 ${props.grad} flex justify-between items-center gap-6 p-5 lg:justify-center lg:gap-28`}>
    <img src={props.image} alt="" className='w-64 lg:w-80'/>
   <div className='flex flex-col gap-5  pe-14'>
   <p className='font-bold text-2xl lg:text-3xl'>{props.title}</p>
   <p className='text-lg'>{props.par}</p>
   </div>
 </div>
  );
}
