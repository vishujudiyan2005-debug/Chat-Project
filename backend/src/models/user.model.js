import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"


const userSchema = new Schema({

    fullname:{
        type : String,
    },
    username:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
    avatar:{
        type: String,
      
    },
},{timestamps : true})

userSchema.pre("save", async function(){
    if(! this.isModified("password"))return

    this.password = await bcrypt.hash(this.password,10)
})

export const User = mongoose.model("User",userSchema)