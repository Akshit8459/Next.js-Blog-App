import '@/app/global.css';
import Image from 'next/image';
export default function Home() {
  return (
    <div className='p-12 text-sky-950 font-mono mb-8'>
      <div className=' flex flex-wrap justify-between px-8 py-4'>
        <div className='w-2/3 flex flex-col justify-between px-16'>
          <h1 className='text-7xl mt-20'>Creative Thoughts Agency</h1>
          <p className='mt-10 text-lg'> lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className='flex flex-wrap gap-4 my-8'>
            <button className='bg-[#00ABE4] p-2 border-2 rounded-md hover:bg-[#00abe458] transition-all duration-150'>Learn More</button>
            <button className='bg-zinc-100 border-2 text-[#00ABE4] p-2 rounded-md hover:bg-inherit transition-all duration-150'>Contact</button>
          </div>
          <Image src={'/brands.png'} alt='brands' width={800} height={250} />
        </div>
        <div className=' flex justify-between p-4 '>
          <Image src='/hero.gif' alt='hero' width={400} height={400} />
        </div>
      </div>
    </div>
    );
}
