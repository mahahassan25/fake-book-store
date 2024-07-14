import React, { useEffect, useState } from 'react';
import AuthCard from '../layout/AuthCard';
import { Spinner } from "flowbite-react";
export default function Authors() {
  const [author,setAuthor]=useState(null);
  useEffect(()=>{
    getAuth();
  },[])
  const getAuth=async()=>{
    const res=await fetch('https://freetestapi.com/api/v1/authors');
    const data= await res.json();
     setAuthor(data);
  }
  if(author===null){
    return <Spinner aria-label="Default status example" />;
  }
  return (
    <div className='flex flex-wrap justify-center gap-10 mt-10 mb-10'>
       {
        author.map((elm,i)=> <AuthCard name={elm.name} image={elm.image}/>)
       }
    </div>
  );
}
