import Link from 'next/link'
import NavLink from '../NavLinks/navlink'
import { auth } from '@/lib/auth'
const Nav = async() => {
  
  //temp
  const session=await auth();
  
  console.log("session:",session);
  
  return (
    <div className='bg-[#00ABE4] text-white min-h-20 flex  min-w-fit justify-between flex-wrap items-center text-lg font-serif' >
      <div className='ml-20  p-2 text-[30px] font-bold'><Link href={"/"}>logo</Link></div>
        <NavLink session={session}/>
    </div>
  )
}

export default Nav