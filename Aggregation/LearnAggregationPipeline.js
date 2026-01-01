import { PostModel } from "../Mongoose/PostSchema.js";
import { Usermodel } from "../Mongoose/Schema.js";
import { Orders } from "../Mongoose/Orderschema.js";
import mongoose, { Schema } from "mongoose";


export const countAllActiveUsers = async () =>{
 try{
    await Orders.create({
        sku : 106,
        name : "Artisan Products",
        price : 500,
        userDetails : "6952cc6073a8fd5460d54c45"
    })
 }catch(e){
    console.log(e, 'error')
 }
}


export const findAllOrdersOfSree = async () =>{
    try{
        const sreeObjID = new mongoose.Types.ObjectId(
            "6952cc44df7e817f39faf89a"
        )

        const data = await Orders.aggregate([
            {
                $match : {
                    userDetails : sreeObjID
                }
            },
            {
                $lookup : {
                    from : "users",
                    localField : "userDetails",
                    foreignField : "_id",
                    as : 'user'
                }
            },
            {$unwind : '$user'},
            {
                $project : {
                    name : 1,
                    price : 1,
                    sku : 1,
                    "user.name" : 1,
                    "user.email" : 1
                }
            }
    ])
    console.log(data, 'first aggregation')

    }catch(e){
        console.log(e)
    }
}

export const findAllOrderOfSub = async () =>{
    const subramaniObjID = new mongoose.Types.ObjectId('6952cc6073a8fd5460d54c45')

    try{
        const findAllSub = await Orders.aggregate([
            {$match : {
                userDetails : subramaniObjID  
            }},
            {
                $lookup : {
                    from : "users",
                    localField : "userDetails",
                    foreignField : "_id",
                    as : "user"
                }
            },
            {
                $unwind : '$user'
            },
            {
                $group : {
                    _id : "$user._id",
                    totalPrice : {$sum : "$price"},
                    userName : {$first : "$user.name"},
                    userEmail : {$first : "$user.email"},
                }
            },
            {
                $project : {
                    _id : 0
                }
            }
        ])
        console.log(findAllSub)
    }catch(e){
        console.log(e)
    }
}

//count

export const countAllActive = async () =>{
    try{
        const countAllActiveUsers = await Usermodel.aggregate([
            {
                $match : {
                    isActive : true
                }
            },
            {
                $group : {
                    _id : null,
                    isActive : {$sum : 1},
                }
            }
        ])
        console.log(countAllActiveUsers, 'all active users')
    }catch(e){
        console.log(e, 'error')
    }
}


//find how much order does sreekanth made ?


export const findSreekanthOrders = async () =>{

    const sreeID = new mongoose.Types.ObjectId('6952cc44df7e817f39faf89a')
    
    try{
        const sreekanthTotalOrders = await Orders.aggregate([
            {
                $match : {
                    userDetails : sreeID
                }
            },
            {
                $lookup : {
                    from : 'users',
                    localField : 'userDetails',
                    foreignField : "_id",
                    as : 'user'
                }
            },
            {
                $unwind : '$user'
            },
            {
                $group :{
                    _id : null,
                    totalOrders : {$sum : '$price'},
                    userName : {$first : "$user.name"},
                    userEmail : {$first : '$user.email'}
                }
            },
            {
                $addFields : {
                    level : {
                        $switch : {
                            branches : [
                                {case : {$gte : ['$totalOrders', 400]}, then : "A"},
                                {case : {$gte : ['$totalOrders', 300]}, then : "B"}
                            ]
                        }
                    }
                }
            },
            {
                $project : {
                    _id : 0,
                    userName : 1,
                    userEmail : 1,
                    totalOrders : 1,
                    status: {
                        $cond : [
                            {$gt : ['$totalOrders', 300]},
                            "Pass", "Fail"
                        ]
                    },
                    level : 1
                }
            }
        ])

        console.log(sreekanthTotalOrders, 'sree total orders')
        
    }catch(e){
        console.log(e)
    }
}


