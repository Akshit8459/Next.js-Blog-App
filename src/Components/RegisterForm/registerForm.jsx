"use client"
import { registerUser } from '@/lib/actions'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {useFormState} from 'react-dom'

const RegisterForm = () => {
    const router=useRouter();
    const [state,formAction]= useFormState(registerUser , undefined);
    useEffect(()=>{
        state?.success && router.push('/login')
    },[state?.success,router])

  return (
    <form action={formAction} className='flex flex-col items-center gap-4 border-2 border-black p-6 bg-slate-300 rounded-lg w-fit h-fit'>
            <input type="text" placeholder="Username" name='username' className='border-2 rounded-lg p-2' />
            <input type="email" placeholder="Email" name='email' className='border-2 rounded-lg p-2'/>
            <input type="password" placeholder="Password" name='password' className='border-2 rounded-lg p-2'/>
            <input type="password" placeholder="Confirm Password" name='confirmpassword' className='border-2 rounded-lg p-2'/>
            <button className='bg-zinc-100 p-3 w-fit mx-auto rounded-lg text-lg font-mono hover:bg-slate-200 hover:scale-105 border-2 border-black transition-all duration-200' >Sign Up</button>
            {state?.error && <p>{state?.error}</p>}
            {<p>
              Already have an account? 
            <Link href={"/login"} className='text-blue-500 p-1'>
                Log In
            </Link></p>}
    </form>
  )
}

export default RegisterForm