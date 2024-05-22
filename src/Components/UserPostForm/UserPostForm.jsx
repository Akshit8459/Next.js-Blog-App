"use client"
import { registerUser } from '@/lib/actions'
import React from 'react'
import {useFormState} from 'react-dom'


const UserPostForm = () => {
    const[state,formAction]= useFormState(registerUser,undefined)

    return (
      <form action={formAction} className='border-2 border-black flex flex-col w-fit items-center gap-2 '>
          <h1>Add New User</h1>
          <input type='text' placeholder='Username' name='username'/>
          <input type='text' placeholder='Image URL' name='img'/>
          <input type='password' placeholder='Password' name='password'/>
          <input type='password' placeholder='Confirm Password' name='confirmpassword'/>
          <input type='email' placeholder='abc@gmail.com' name='email'/>
          <button  className='w-fit mx-auto px-4 border-2 border-black rounded-lg'>Add</button>
          {state?.error &&<p>{state.error}</p>}
      </form>
    )
}

export default UserPostForm