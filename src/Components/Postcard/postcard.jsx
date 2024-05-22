
import Image from "next/image"
import Link from "next/link"


const Postcard = ({post}) => {
  console.log(post);
  return (
    <div className="flex flex-col font-sans w-1/4 ">
        <div className="flex items-center justify-end relative w-[300px] h-[400px]">
            {post.img?(<Image src={post.img} fill />):(<Image src="/noavatar.png" height={400} width={225}/>)} 
            <p className="-rotate-90 font-bold text-black">{post.createdAt?.toString().slice(4,16)}</p>
        </div>
        <div className="p-1">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="w-52 p-1 h-20 line-clamp-3 ">
            {post.body}</p>
            <button className="text-sky-950 underline" ><Link href={`/blog/${post.slug}`}>Read More</Link></button>
        </div>
    </div>
  )
}

export default Postcard