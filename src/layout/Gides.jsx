import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { PiKeyReturnThin } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";
export default function Gides() {
  return (
    <div className='flex  flex-wrap justify-center items-center bg-gray-200 gap-7 lg:gap-5'>
      <div className={`${styles.box}`}>
      <MdLocalShipping className='text-5xl'/>
      <p>Free Shipping</p>
      </div>
      <div className={`${styles.box}`}>
      <CiGift  className='text-5xl'/>
      <p>Gift Card</p>
      </div>
      <div className={`${styles.box}`}>
      <PiKeyReturnThin className='text-5xl'/>
      <p>7 Days Return</p>
      </div>
      <div className={`${styles.box}`}>
      <PiTelegramLogo  className='text-5xl'/>
      <p>Contact Us</p>
      </div>
    </div>
  );
}
const styles={
    box:'flex flex-col justify-center items-center p-5  border border-1 rounded-full w-3/4 lg:w-1/5 border-black font-bold text-xl mt-5 lg:mb-7',
}
