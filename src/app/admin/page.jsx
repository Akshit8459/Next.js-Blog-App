import AdminPostForm from "@/Components/AdminPostForm/AdminPostForm"
import AdminPosts from "@/Components/AdminPosts/AdminPosts"
import UserPostForm from "@/Components/UserPostForm/UserPostForm"
import UserPosts from "@/Components/UserPosts/UserPosts"
import { auth } from "@/lib/auth"
import { Suspense } from "react"

const AdminPage = async() => {
  const session=await auth();
  return (
    <div  className="flex flex-col items-center">
      <h1>Admin Page</h1>
      <p>This is the admin page</p>
      <div className="flex flex-wrap w-full items-center justify-center gap-32">
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPostForm userId={session?.user.id}/>
          </Suspense>
        </div>
      </div>
      <div className="flex flex-wrap w-full items-center justify-center gap-32">
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <UserPosts />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <UserPostForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default AdminPage