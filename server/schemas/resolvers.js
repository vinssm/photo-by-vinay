
import {comments, users} from '../fakedb.js'
import {randomBytes} from 'crypto'
import mongoose from 'mongoose'

import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/connection.js'

const User = mongoose.model("User")
const Comment = mongoose.model("Comment")

const resolvers = {
    Query:{
        users:()=>users,
        user:(_,{_id})=>users.find(user=>user._id == _id),
        comments:()=>comments,
        icomment:(_,{by})=>comments.filter(comment=>comment.by == by)      
    },
    User:{
        comments:(ur)=>comments.filter(comment=>comment.by == ur._id)
    },
    Mutation:{
        signupUser:async (_,{userNew})=>{
           const user = await User.findOne({email:userNew.email})
           if(user){
               throw new Error("User already exists with that email")
           }
       const hashedPassword = await bcrypt.hash(userNew.password,12)

      const newUser = new User({
            ...userNew,
            password:hashedPassword
       })

         return await newUser.save()
        },
        signinUser:async (_,{userSignin})=>{
            //User Signing In
           const user = await User.findOne({email:userSignin.email})
           if(!user){
               throw new Error("User does not exist with that email")               
           }
           const doMatch = await bcrypt.compare(userSignin.password,user.password)
           if(!doMatch){
               throw new Error("email or password are invalid")  
           }

           const token = jwt.sign({userId:user._id},JWT_SECRET)
           return {token}
         },
         createComment:async (_,{name},{userId})=>{
             //
             if(userId) throw new Error("User must be logged in please check")
             const newComment = new Comment({
                 name,
                 by:userId
             })
             await newComment.save()
             return "Awesome! your comment has been saved successfully"
         }
    }
}

export default resolvers