import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";



const registerUser = asyncHandler(async(req,res)=>{

    const {fullname,username,email,password} = req.body

    if([username,email,password].some((field)=> !field?.trim())){
        throw new ApiError(400,"All credentials are required")
    }

   const userAlreadyExist = await User.findOne({
       $or : [{username,email}]
    })

    if(userAlreadyExist){
        throw new ApiError(401, "User with same username or email already exists")
    }
    

  

    const avatarPath = req.files?.avatar?.[0]?.path
    if(!avatarPath){
        throw new ApiError(501, "Avatar Path is not uploaded")
    }

    const avatar = await uploadOnCloudinary(avatarPath)
    if(!avatar){
        throw new ApiError(501, "Avatar is not uploaded on cloudinary")
    }

    const user = await User.create({
    fullname,
    username : username.toLowerCase(),
    email : email.toLowerCase(),
    password,
    avatar: avatar.url

})

    const createdUser = await User.findById(user._id).select("-password")

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    return res
    .status(200)
    .json({
        success : true,
        user: createdUser,
        message : "User registered Successfully"
    })
})

export {registerUser}