import RegisterForm from '@/Components/RegisterForm/registerForm'
import Link from 'next/link'
import React from 'react'

const page = () => {

  return (
    <div className='flex flex-col items-center mt-52 flex-wrap min-h-screen'>
        <h1 className='font-mono font-bold text-5xl mb-20'>Register</h1>
        <RegisterForm/>
    </div>
  )
}

export default page