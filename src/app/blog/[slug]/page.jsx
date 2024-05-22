import PostUser from '@/Components/postUser/postUser'
import { getPost } from '@/lib/data'
import Image from 'next/image'
import React, { Suspense } from 'react'

export const generateMetadata = async({params}) => {
  const {slug}=params
  console.log("slug from SEO:",slug)
  const post=await getPost(slug);
  console.log("post from SEO:",post)
  return {
    title: post.title,
    description: post.desc,
  }
}



const SinglePostPage = async ({params}) => {
  const {slug}=params;
  const post=await getPost(slug);
  return (
    <div className='p-28 min-h-screen text-sky-950 font-sans'>
      <div className='flex'>
        <div className='w-1/2 min-h-full'>
        {post.img?(<Image src={post.img}  width={400} height={400} />):(<Image src='/noavatar.png' className='rounded-full' width={50} height={50} />)}
        </div>
        <div className='w-1/2'>
          <h1 className='text-4xl font-bold'>{post.title}</h1>
          <div className='flex gap-8 my-5'>
            {<Suspense fallback={<div>Loading...</div>} >
              <PostUser id={post.userId}/>
            </Suspense> } 
            <div>
                <p className='text-sm font-bold text-gray-600 '>Date</p>
                <p className='text-sm font-semibold'>01.01.2024</p>
            </div>
            </div>
          <p className='text-lg'>{post.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage