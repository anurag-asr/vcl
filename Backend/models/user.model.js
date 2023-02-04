const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    email:{type:String,require:true},
    password:String,
    profession:String,
    name:String,
    phone:Number,
    resume:String,
    createdAt:String,
    updatedAt:String
})

const userModel=mongoose.model("user",UserSchema)

module.exports={
    userModel
}