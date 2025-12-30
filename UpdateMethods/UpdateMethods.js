import { PostModel } from "../Mongoose/PostSchema.js";
import { Usermodel } from "../Mongoose/Schema.js";



export const updateOne = async ()=>{
    try{
        await Usermodel.updateOne({name : "Sreekanth Subramani"}, {$set : {email : "s@s.com"}})
        .then((updatedDoc)=>{
            console.log(updatedDoc, 'updated doc with renamed email')
        })
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}


export const updateOneAgain = async ()=> {
    try{
        await Usermodel.updateOne({name : "subramani"}, {email : "subramani@ggmail.com"})
        .then((d)=> console.log(d, 'newly changed doc'))
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}


export const updateMany = async () =>{
    try{
        await Usermodel.updateMany({isActive : false}, {role : "USER"})
        .then((changed)=> console.log(changed))
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}


export const findAndUpdate = async ()=> {
    try{
        await PostModel.findOneAndUpdate({title : 'Shalini loves Sree'}, {$set : {title : "Shalini loves Sreekanth"}}, {new : true})
        .then((newPost)=> console.log(newPost, 'new post'))
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}

export const findIdUpdate = async ()=>{
    try{
        await PostModel.findByIdAndUpdate('694ef6564e2c56d01c842077', {title : "Changed Ref name to change"},{new : true})
        .then((d)=> console.log(d))
        .catch(err=> console.log(err))

    }catch(e){
        console.log(e)
    }
}

export const replaceOneMongo = async ()=>{
    try{
        await PostModel.replaceOne({content : 'Create Post Test Mongoose'}, {
            title : "replaced title"
        })
        .then((d)=> console.log(d))
        .catch(err=> console.log(err))

    }catch(e){
        console.log(e)
    }
}