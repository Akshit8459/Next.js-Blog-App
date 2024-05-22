import { unstable_noStore } from "next/cache";
import { Post, User } from "./models"
import connectToDb from "./util"
import mongoose from "mongoose"

export const getPosts=async()=>{
    try{
        connectToDb();
        const posts=await Post.find();
        return posts;
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch posts")
    }
}

export const getPost=async(slug)=>{
    try{
        connectToDb();
        const post=await Post.findOne({slug:slug})
        return post;
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch post")
    }
}

export const getUser=async({id})=>{
    unstable_noStore();
    try{
        connectToDb();
        const user=await User.findById(id)
        return user;
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch user")
    }
}

export const getUsers=async(id)=>{
    try{
        connectToDb();
        const users=await User.find()
        return users;
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch users")
    }
}
