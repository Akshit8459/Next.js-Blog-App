"use client"
import { loginUser } from '@/lib/actions'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {useFormState} from 'react-dom'
import Link from 'next/link';

const LoginForm = () => {
    const router=useRouter();
    const [state,formAction]= useFormState(loginUser , undefined);
    useEffect(()=>{
        state?.success && router.push('/')
    },[state?.success,router])
  return (
    <div>
        <form action={formAction} className='flex flex-col items-center flex-wrap gap-4 rounded-lg'>
              <input type="text" name="email" placeholder="email" className='p-2 rounded-lg border-2'/>
              <input type="password" name="password" placeholder="password" className='p-2 rounded-lg border-2'/>
              <button className='bg-zinc-100 px-4 w-fit mx-auto rounded-lg text-lg font-sans hover:bg-slate-200 hover:scale-105 border-2 border-black transition-all duration-200' >Log In</button>
                {state?.error && <p>{state?.error}</p>}
                <Link href={"/register"} className='text-blue-500 p-1'>
                Sign Up
                </Link>
          </form>
              
          <hr className='font-bold text-black h-0 w-full border-1 my-3 border-black rounded-lg'/>
    </div>
  )
}

export default LoginForm