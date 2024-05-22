import LoginForm from '@/Components/LoginForm/LoginForm';
import { handleGitHubLogin, loginUser } from '@/lib/actions';
import { auth, signIn } from '@/lib/auth';
import React from 'react'

const page =async () => {

    const session=await auth();
    
  return (
    <div className='flex flex-col flex-wrap items-center p-20'>
        <h1 className='font-bold text-4xl font-mono my-16'>Login</h1>
        <div className=' flex flex-col items-center gap-2 border-2 border-black rounded-lg px-6 py-8'>
          <LoginForm />
          <form action={handleGitHubLogin}>
              <button className='bg-slate-400 px-6 w-fit mx-auto rounded-lg text-lg font-sans hover:bg-slate-300 hover:scale-105 border-2 border-black transition-all duration-200'>GitHub LogIn</button>
          </form>
        </div>
    </div>
  )
}

export default page