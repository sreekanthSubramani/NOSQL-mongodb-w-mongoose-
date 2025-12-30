import {Schema, model, Types} from 'mongoose'


const Ordermodel = new Schema({
    sku : {
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    userDetails : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})


export const Orders= model("Order", Ordermodel)