import React from 'react'

const Navbar = ({setShowRegister}) => {
    
  return (
    <div className='bg-green-400 p-3 fixed w-screen px-5 flex justify-between rounded-b-lg shadow-2xl'>
      <h1 className='font-extrabold text-2xl'>Chat App</h1>
      <div className='flex gap-20 font-semibold'>
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">About us</a>
      </div>
       <button onClick={()=>setShowRegister(true)}
       className='bg-white opacity-90   w-40 font-bold rounded-md text-lg transition-all duration-300 hover:opacity-100 text-green-600 hover:scale-105 hover:bg-green-600 hover:text-white'>Get Started</button> 
    </div>
  )
}

export default Navbar
