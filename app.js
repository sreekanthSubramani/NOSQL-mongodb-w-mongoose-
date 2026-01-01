import * as mongoose from "mongoose";
import { Usermodel } from "./Mongoose/Schema.js";
import { PostModel } from "./Mongoose/PostSchema.js";
import { Orders } from "./Mongoose/Orderschema.js";

///create import
import {createUser} from "./CreateMethods/CreateMethod.js";
// post create import
import { createPost } from "./CreateMethods/CreatePosts.js";
// read user
import { readById, readUser, readByExist, countingDoc, estimatedCounts, useDistinct } from "./ReadMethods/Readmethods.js";


//update 
import { updateOne,updateOneAgain,updateMany,findAndUpdate,findIdUpdate, replaceOneMongo } from "./UpdateMethods/UpdateMethods.js";

//delete method
import {deleteOne,deleteMany} from './DeleteMethods/DeleteMethods.js'



//aggregation method

import { countAllActiveUsers,findAllOrdersOfSree,findAllOrderOfSub, countAllActive, findSreekanthOrders } from "./Aggregation/LearnAggregationPipeline.js";

async function runMoongose(){
    await mongoose.connect('mongodb+srv://sreekanth:Sree%40123@mongowmongoose.cn6jnfx.mongodb.net/')
}



runMoongose()



//create invoke

// createUser()
// createPost()

//read methods

// readUser()
// readById()
// readByExist()
// countingDoc()
// estimatedCounts()
// useDistinct()


//update methods
// updateOne()
// updateOneAgain()
// updateOneAgain()
// updateMany()
// findAndUpdate()
// findIdUpdate()
// replaceOneMongo()


//delete methods

// deleteOne()
// deleteMany()
// countAllActiveUsers()
// findAllOrdersOfSree()
// findAllOrderOfSub()
// countAllActive()
findSreekanthOrders()