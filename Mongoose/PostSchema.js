import {  model, Schema, Types } from "mongoose";


const subDocMetaData = new Schema({
    author : {type : String},
    isActive : {type : Boolean},
    worker: {
        type : String,
        enum : ['Class1', 'Class2'],
        default : "Class1"
    }
})


const postSchema = new Schema({
    title : {
        type : String,
        required : true,
        minLength : 10,
        maxLength : 30,
        unique : true
    },
    content : {
        type : String,
        required : true
    },
    metaData : subDocMetaData,
    userDetails : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})


export const PostModel = model('Post', postSchema)