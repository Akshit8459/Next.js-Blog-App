"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { handleLogOut } from '@/lib/actions'


const NavLink = ({ session }) => {
  const pathname=usePathname()
  const isAdmin=true;
  return (
    <div className={`flex gap-8 mr-24 p-4 justify-between items-center h-full`}>
            <Link href="/" className={`${pathname=="/"?"bg-white text-[#00ABE4] p-2 rounded-3xl":""}`}>Home</Link>
            <Link href="/blog" className={`${pathname=="/blog"?"bg-white text-[#00ABE4] p-2 rounded-3xl":""}`}>Blog</Link>
            <Link href="/about" className={`${pathname=="/about"?"bg-white text-[#00ABE4] p-3 rounded-3xl":""}`}>About</Link>
            <Link href="/contactus" className={`${pathname=="/contactus"?"bg-white text-[#00ABE4] p-2 rounded-3xl":""}`}>Contact</Link>
            {
              session?.user?(<>
              {session.user?.isAdmin && <button><Link href={"admin"}>Admin</Link></button>}
                <form action={handleLogOut}>
                  <button className='bg-white text-[#00ABE4] p-1'>Logout</button>
                </form>
                
                </>):
              (<button className='bg-white text-[#00ABE4] p-1'><Link href={"/login"}>Login</Link></button>)
            }          
        </div>
  )
}

export default NavLink