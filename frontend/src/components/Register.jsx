import React, { useState } from 'react'
import { X } from "lucide-react";


const Register = ({setShowRegister,setShowSignin}) => {


  const [fullname, setFullname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState(null)

  return (
   
    <div className='w-screen h-screen flex items-center justify-center fixed inset-0 '>
      <form className='relative flex flex-col shadow-black shadow-2xl rounded-2xl h-4/5 w-1/3  pt-15 pb-3 px-5 gap-8 bg-green-100'>
        <div onClick={()=>{
          setShowRegister(false)
        }}
        className='  absolute text-white top-4 right-4 h-6 w-6 bg-green-800 rounded-full hover:bg-red-600 hover:scale-105 cursor-pointer'>
                <X strokeWidth={1}   />   
        </div>
      
     
        <input onChange={(e)=>{
          setFullname(e.target.value)
        }}
         className='border-3 border-green-700 px-4 w-full h-1/10 rounded-lg font-bold' type="text" placeholder='Enter Full name' />
        <input  onChange={(e)=>{
          setUsername(e.target.value)
        }}
        className='border-3 border-green-700 px-4 w-full h-1/10 rounded-lg  font-bold' type="text" placeholder='Enter Username' />
        <input  onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='border-3 border-green-700 px-4 w-full h-1/10 rounded-lg  font-bold' type="text" placeholder='Enter Email' />
        <input  onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='border-3 border-green-700 px-4 w-full h-1/10 rounded-lg  font-bold' type="password" placeholder='Enter Password' />



      <div className="w-full">
  <label
    htmlFor="avatar"
    className="flex items-center justify-between px-5 py-3 border-2 border-green-700 rounded-xl cursor-pointer hover:border-green-500 transition"
  >
    <span className="text-gray-500 font-semibold">
      {avatar ? avatar.name : "Upload Profile Photo"}
    </span>

    <span className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
      Browse
    </span>
  </label>

  <input
    id="avatar"
    type="file"
    className="hidden"
    onChange={(e) => setAvatar(e.target.files[0])}
  />
</div>

        <button 
         className='bg-green-500 rounded-2xl text-white font-bold w-full h-2/10 transition-all duration-300 hover:scale-105 hover:bg-green-800 '>Register</button>
        <div className='flex justify-center gap-3'>
             <p>Already a user?</p>
               <p onClick={(e)=>{
                  setShowSignin(true)
                  setShowRegister(false)
               }}
               className='text-blue-600 cursor-pointer'>Sign in</p>
        </div>
      </form>
    </div>
  )
      
   
  
}

export default Register
