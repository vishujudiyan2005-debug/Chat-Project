import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api/axios'
import { X } from "lucide-react";


const Signin = ({setShowSignin ,setShowRegister}) => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async(e)=>{
    e.preventDefault()
   
  }

  return (
      <div className='w-screen h-screen flex items-center justify-center  fixed inset-0 '>
      <form className='relative flex flex-col shadow-black shadow-2xl rounded-2xl h-2/4 w-1/3  pt-10 pb-3 px-5 gap-8 bg-amber-50'>

        <div onClick={()=>{
          setShowSignin(false)
        }}
        className='  absolute text-white top-3 right-4 h-6 w-6 bg-green-800 rounded-full hover:bg-red-600 hover:scale-105 cursor-pointer'>
                <X strokeWidth={1}   />   
        </div>
        <input onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='border-3 border-green-700 px-4 w-full h-1/6 rounded-lg  font-bold' type="text" placeholder='Enter Email' />
        <input onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='border-3 border-green-700 px-4 w-full h-1/6 rounded-lg  font-bold' type="password" placeholder='Enter Password' />
        <button onClick={submitHandler}
        className='bg-green-500 rounded-2xl text-white font-bold w-full h-2/10 transition-all duration-300 hover:scale-105 hover:bg-green-800 '>Sign in</button>
        <div className='flex justify-center gap-3'>
             <p>New user?</p>
          <p onClick={(e)=>{
                  setShowSignin(false)
                  setShowRegister(true)
               }}
               className='text-blue-600 cursor-pointer'> Register</p>
        </div>
      </form>
    </div>
  )
}

export default Signin