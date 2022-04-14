
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const mongoose = require ('mongoose');
const bcrypt  = require ("bcryptjs");
const jwt = require ('jsonwebtoken');



const Comment = mongoose.model("Comment")

const resolvers = {
    Query:{
        users:async ()=> await User.find({}),
        user:async (_,{_id})=> await User.findOne({_id}),
        comments:async ()=> await Comment.find({}).populate("by","_id firstName"),
        icomment:async (_,{by})=> await Comment.find({by}),
        myprofile:async (_,args,{userId})=>{
            if(!userId) throw new Error("User must be logged in please check")
           return await User.findOne({_id:userId})
        }  
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
           const token = jwt.sign({userId:user._id},process.env.JWT_SECRET)
           return {token}
         },
         createComment:async (_,{name},{userId})=>{
             //
             if(!userId) throw new Error("User must be logged in please check")
             const newComment = new Comment({
                 name,
                 by:userId
             })
             await newComment.save()
             return "Awesome! your comment has been saved successfully"
         }
    }
}

module.exports = resolvers;
