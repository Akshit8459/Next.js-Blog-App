import { deleteUser } from '@/lib/actions';
import { getUsers } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

const UserPosts = async() => {
    const users=await getUsers();

    return (
      <div className='border-2 border-black w-fit p-4'>
          <h1 className='font-sans ml-10 text-xl'>Posts</h1>
          <ul>
              {users.map(user=>(
                  <li key={user.id} className="flex flex-col min-w-fit max-w-[400px] border-2 border-slate-400 p-2">
                      <div className='flex gap-2 items-center'>
                          <Image src={user?.img || '/no-image.png'} width={50} height={50} alt={"userImg.png"}/>
                          <h2>{user.username}</h2>
                      </div>
                      <form action={deleteUser}>
                          <input type='hidden' value={user.id} name='id'/>
                          <button className='border-2 border-black rounded-lg px-4 mt-1 w-fit mx-auto' >Delete</button>
                      </form>
                  </li>
              ))}
          </ul>
      </div>
    )
}

export default UserPosts