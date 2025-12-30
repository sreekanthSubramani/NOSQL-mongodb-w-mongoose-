

import {Schema, model} from "mongoose"


const UserSchema = new Schema({

    email : {
        type : String,
        required : true,
        unique : true,
        index : true,
    },
    passwordHash : {
        type : String,
        required : true,
        select : false
    },
    name : {
        type : String,
        required : true
    },
    isActive : {
        type : Boolean,
        default : true
    },
    role : {
        type : String,
        enum : ['USER', 'ADMIN'],
        default : 'USER'
    }
    },{
        timestamps : true,
        
    })

UserSchema.pre('save', function (next){
    this.name = this.name.toLowerCase() 
} )

export const Usermodel = model('User', UserSchema)