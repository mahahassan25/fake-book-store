import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import book3 from '../assets/book3.png'
import ImageGall from './ImageGall';


export default function Gallary(props) {
  return (
    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <ImageGall image={book1} 
        grad='bg-gradient-to-r from-red-500 to-green-500'
        title='Book Store'
        par="It's not just reading. it's living the adventure"
        />
        </SwiperSlide>
        <SwiperSlide>
        <ImageGall image={book2} 
        grad='bg-gradient-to-b from-yellow-400 to-sky-500'
        title='The Books For Everyone'
        par="You can read at the bookstore or at home"
        />
        </SwiperSlide>
        <SwiperSlide>
        <ImageGall image={book3} 
        grad='bg-gradient-to-r from-purple-600 to-orange-300'
        title='Check Out The New Titles'
        par="We send you the book you want at home"
        />
        </SwiperSlide>
       
      </Swiper>
        
    </>
  );
}
