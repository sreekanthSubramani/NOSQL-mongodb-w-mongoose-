import { PostModel } from "../Mongoose/PostSchema.js";



export const createPost = async ()=>{
    try{
        await PostModel.create({
            content : "Create Post Test Mongoose",
            title : "Create Post Mongoose",
            userDetails : '695156fba6080ce8328037b1',
            metaData : {
                author : "sree",
                isActive : true,
                worker : "Class1"
            }
        })
        .then((d)=> console.log(d, 'post created'))
        .catch(e=> console.log(e))


    }catch(e){
        console.log(e)
    }
}