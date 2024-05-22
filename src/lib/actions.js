"use server"
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import connectToDB from "./util";
import { auth, signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const makePost=async(prevState,formdata)=>{
    "use server";
    const {title,desc,slug,userid}=Object.fromEntries(formdata);
    try{
        connectToDB();
        const newPost= new Post({
            title,
            desc,
            slug,
            userId:userid});
        const result=await newPost.save();
        console.log(result,"post created");
        revalidatePath("/admin")
        revalidatePath("/blog")
    }catch(err){
        console.log(err);
    }
}

export const deletePost=async(formdata)=>{
    "use server";
    const {id}=Object.fromEntries(formdata);
    connectToDB();
    const deletedPost=await Post.findByIdAndDelete(id);
    console.log(deletedPost,"post deleted");
    revalidatePath("/blog")
    revalidatePath("/admin")
}

export const handleGitHubLogin = async (e) => {
    await signIn("github");
}

export const handleLogOut=async()=>{
    await signOut();
}

export const registerUser=async(previousState,formdata)=>{
    "use server";
    const {username,email,password, confirmpassword,img}=Object.fromEntries(formdata);
    if(password!==confirmpassword){
        return {error:'passwords do not match'};
        
    }
    try{
        connectToDB();
        const user=await User.findOne({email})
        if(user){
            return {error:'user already exists'};
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser= new User({
            username,
            email,
            password:hashedPassword,
            img
        });
        await newUser.save();
        console.log('new user created');
        revalidatePath("/admin")
        return {success:true};
    }
    catch(e){
        console.log(e);
        return {error:'something went wrong while registering user recheck data and try again'};
    }
}

export const deleteUser=async(formdata)=>{
    "use server";
    const {id}=Object.fromEntries(formdata);
    connectToDB();
    await Post.deleteMany({userId:id});
    await User.findByIdAndDelete(id);
    revalidatePath("/admin")
    revalidatePath("/blog")
    console.log("User Deleted");
}

export const addUser=async(prevState,formdata)=>{
    "use server";
    const {username,email,password,img}=Object.fromEntries(formdata);
    try{
        connectToDB();
        const newUser= new User({
            username,
            email,
            password,
            img});
        const result=await newUser.save();
        revalidatePath("/blog")
        revalidatePath("/admin")
    }catch(err){
        console.log(err);
    }
}


export const loginUser=async(previousState,formdata)=>{
    "use server";
    const {email,password}=Object.fromEntries(formdata);
    try{
        await signIn('credentials',{
            email:email,
            password:password,
            redirect:false});
    }
    catch(e){
        console.log(e);
        if(e?.type=='CredentialsSignin'){
            return {error:'Invalid Username or Password'};
        }
        return{error:'Something went wrong while logging in'};
    }
}