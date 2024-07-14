import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';

export default function Register() {
  return (
<div className='w-full flex flex-col justify-center gap-4 items-center bg-gray-200'>
  <p className='font-bold text-xl  text-cyan-900'>Create a new account</p>
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
    <div>
      <div className="mb-2 block">
        <Label htmlFor="repeat-password" value="Repeat password" />
      </div>
      <TextInput id="repeat-password" type="password" required shadow />
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="agree" className='text-yellow-800'/>
      <Label htmlFor="agree" className="flex">
        I agree with the&nbsp;
        <Link to="#" className="text-yellow-700 hover:underline dark:text-cyan-500">
          terms and conditions
        </Link>
      </Label>
    </div>
    <Button type="submit" className='bg-yellow-700'>Register new account</Button>
  </form>
  <div>
    <span>don't have an account?</span>
    <Link className='text-yellow-700 font-bold ps-1' to="/login">login</Link>
  </div>
  </div>
  );
}
