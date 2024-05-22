import { deletePost, makePost } from '@/lib/actions'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>TO CREATE A POST</h1>
        <form action={makePost} className='flex flex-col gap-2 w-1/4 p-4 ml-24'>
            <input type="text" name="title" id="title" placeholder="title"/>
            <input type="text" name="desc" id="desc" placeholder="desc" />
            <input type="text" name="slug" id="slug" placeholder="slug" />
            <input type="text" name="userid" id="userid" placeholder="userid" />
            <button >Submit</button>
        </form>
        <h1>To DELETE A POST</h1>
        <form action={deletePost} className='flex flex-col gap-2 w-1/4 p-4 ml-24'>
            <input type="text" name="id" id="id" placeholder="post id"/>
            <button >Submit</button>
        </form>
    </div>
  )
}

export default page