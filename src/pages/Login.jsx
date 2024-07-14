import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';  

export default function Login() {
  return (
    <div className='w-full flex flex-col justify-center gap-4 items-center bg-gray-200'>
    <p className='font-bold text-xl  text-cyan-900'>LOGIN</p>
      <form className="flex  flex-col gap-4 w-3/4 lg:w-1/3">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@g.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
     
      <Button type="submit" className='bg-yellow-700'>login</Button>
    </form>
    <div>
      <span>Already  have an account?</span>
      <Link className='text-yellow-700 font-bold ps-1' to="/register">Register</Link>
    </div>
    </div>
  );
}
