
import { getUser } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

const PostUser = async(id) => {
      // try{
      //   const user=await getUser(id);
      //   console.log(user)
      // }
      // catch(err){
      //   console.log(err)
      // }
      const user = await getUser(id);
  return (
    <div className='flex gap-8'>
      {user.img?(<Image src={user.img} className='rounded-full' width={50} height={50} />):(<Image src='/noavatar.png' className='rounded-full' width={50} height={50} />)}
      <div>
        <p className='text-sm font-bold text-gray-600'>Author</p>
        <p className='text-sm font-semibold'>{user.username}</p>
      </div>
    </div>
  )
}

export default PostUser