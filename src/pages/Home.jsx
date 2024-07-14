import React, { useEffect, useState } from 'react';
import Gallary from '../layout/Gallary';
import Gides from '../layout/Gides';
import BookCard from '../layout/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Navigation ,Pagination} from 'swiper/modules';
export default function Home() {
   
   const [book,setBook]=useState([]);
  useEffect(()=>{
    getBook();
  },[])
    const getBook=async()=>{
        const response = await fetch("https://freetestapi.com/api/v1/books");
        const result = await response.json();
        console.log(result);
        setBook(result);
    }
  
  return (
    <div>
       <Gallary/>
       <Gides/>
       <Swiper  slidesPerView={'1'}
        spaceBetween={20}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
           
          }}
         
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper">
      
     {

      book.map((elm,i)=>
        
        <SwiperSlide>
        <BookCard image={elm.cover_image}
       id={elm.id} title={elm.title}/>
       </SwiperSlide>
      
    
    )
     }
     </Swiper>
   
    
    </div>
  );
}
