"use client"
import { makePost } from '@/lib/actions'
import React from 'react'
import {useFormState} from 'react-dom'

const AdminPostForm = ({userId}) => {
    const[state,formAction]= useFormState(makePost,undefined)

  return (
    <form action={formAction} className='border-2 border-black flex flex-col w-fit items-center gap-2 '>
        <h1>Add New Post</h1>
        <input type='hidden' name='userid' value={userId}/>
        <input type='text' placeholder='Title' name='title'/>
        <input type='text' placeholder='Image URL' name='img'/>
        <input type='text' placeholder='slug' name='slug'/>
        <input type='textarea' placeholder='Content' name='desc' rows={10}/>
        <button  className='w-fit mx-auto px-4 border-2 border-black rounded-lg'>Add</button>
        {state?.error &&<p>{state.error}</p>}
    </form>
  )
}

export default AdminPostForm