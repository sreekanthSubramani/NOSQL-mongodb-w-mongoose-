import { PostModel } from "../Mongoose/PostSchema.js";
import {Usermodel} from '../Mongoose/Schema.js'


export const deleteOne = async () =>{
    try{    
        await PostModel.deleteOne({title : "replaced title"})
        .then((s)=> console.log(s, 'has been deleted'))
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}


export const deleteMany = async () =>{
    try{
        await Usermodel.deleteMany({role : "USER"})
        .then((ackn)=> console.log(ackn, 'acknowledged deletion'))
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}