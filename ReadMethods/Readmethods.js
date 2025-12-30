import { PostModel } from "../Mongoose/PostSchema.js";
import { Usermodel } from "../Mongoose/Schema.js";



export const readUser = async ()=>{
    try{
        await Usermodel.findOne({email : "sree@gmail.com" })
        .then((user)=>{
            console.log(user, 'user details with findOne method')
        })
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}


export const readById = async ()=>{
    try{
        await Usermodel.findById("694fc7f61efb18b3a00abb11")
        .then((d)=>{    
            console.log(d, 'finding user by id')
        })
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}


export const readByExist = async ()=>{
    try{
        await Usermodel.exists({email : "sree@gmail.com"})
        .then((d)=>{    
            console.log(d, 'using exist')
        })
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}



//with count documents I can do document related ops and fetch the right data depending upon the query and it retuns only number 

export const countingDoc = async ()=>{
    try{
        await Usermodel.countDocuments({isActive : true})
        .then((d)=>{    
            console.log(d, 'document count with filter')
        })
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}



export const estimatedCounts = async ()=>{
    try{
        await Usermodel.estimatedDocumentCount({collation})
        .then((d)=>{    
            console.log(d, 'estimated document count')
        })
        .catch(err=> console.log(err))
    }catch(e){
        console.log(e)
    }
}


export const useDistinct = async () =>{
    try{
        await Usermodel.distinct('email')
        .then((d)=> console.log(d, 'distinct details'))
        .catch(err => console.log(err))
    }catch(e){
        console.log(e, 'error here !!')
    }
}