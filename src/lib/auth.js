import NextAuth from "next-auth";
import Github from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectToDB from "./util";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

export const {
    handlers:{GET,POST},
    auth,
    signIn
    ,signOut
}=NextAuth(
    {
        ...authConfig,
        providers:[Github({clientId:process.env.GITHUB_ID,clientSecret:process.env.GITHUB_SECRET}),
            CredentialsProvider({
                async authorize(credentials){
                    try{
                        connectToDB();
                        const user= await User.findOne({email:credentials.email});
                        if(!user){
                            throw new Error('no user found');
                        }
                        const isValid= await bcrypt.compare(credentials.password,user.password);
                        if(!isValid){
                            throw new Error('incorrect password');
                        }
                        return user;
                    }catch(e){
                        
                        console.log(e);
                        return null;
                    }
                    return null;
                }
            })
        ],
        callbacks : {
            async signIn({user,account,profile}){
            if(account.provider==='github'){
                connectToDB();
                try{
                    const user= await User.findOne( {email:profile.email} );
                    if(!user){
                        const newUser= new User({
                            username:profile.login,
                            email:profile.email,
                            image:profile.avatar_url,
                            password:profile.id,
                        });
                        await newUser.save();
                        console.log('new user created');
                    }
                }catch(e){
                    console.log(e);
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    },
    }
)