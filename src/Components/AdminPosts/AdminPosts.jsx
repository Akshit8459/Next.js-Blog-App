import { deletePost } from '@/lib/actions';
import { getPosts } from '@/lib/data'
import Image from 'next/image';
import React from 'react'

const AdminPosts = async() => {
    const posts=await getPosts();

  return (
    <div className='border-2 border-black w-fit p-4'>
        <h1 className='font-sans ml-10 text-xl'>Posts</h1>
        <ul>
            {posts.map(post=>(
                <li key={post.id} className="flex flex-col min-w-fit max-w-[400px] border-2 border-slate-400 p-2">
                    <div className='flex gap-2 items-center'>
                        <Image src={post?.img || '/no-image.png'} width={50} height={50} alt={post.title}/>
                        <h2>{post.title}</h2>
                    </div>
                    <form action={deletePost}>
                        <input type='hidden' value={post.id} name='id'/>
                        <button className='border-2 border-black rounded-lg px-4 mt-1 w-fit mx-auto' >Delete</button>
                    </form>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AdminPosts