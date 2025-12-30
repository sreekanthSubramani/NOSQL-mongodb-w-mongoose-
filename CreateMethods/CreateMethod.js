import { Usermodel } from "../Mongoose/Schema.js";


export async function createUser(){
    await Usermodel.create({
    email : 'uma@gmail.com',
    name : "Uma Subramani",
    role : "ADMIN",
    passwordHash : "hashedpassword",
    isActive : true,
})
.then((d)=> console.log(d))
.catch(err=> console.log(err))

} 
