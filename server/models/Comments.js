const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

mongoose.model("Comment", commentSchema)

