import React from 'react';

export default function AuthCard(props) {
  return (
    <div className='flex flex-col items-center border-2 rounded border-cyan-900 w-60 p-6 gap-3'>
          <img src={props.image} alt="" className='object-cover w-48'/>
           <p className='font-bold'>{props.name}</p>
       </div>
  );
}
