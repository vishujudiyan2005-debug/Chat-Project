import React from 'react'
import image from "../assets/chat_Home_bg_img.png"

const HeroHome = () => {
  return (
    
    <div className='flex flex-1 items-center px-9 '>
      <div className='flex flex-col gap-15 w-1/2 text-lg font-bold px-20 leading-12 justify-end'>
        <h1 className='text-3xl font-extrabold'>Stay in Contact <br /> from Anywhere , Anytime</h1>
        <p className='tracking-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veniam, aut temporibus iusto fuga similique rerum obcaecati voluptates laboriosam tenetur.</p>

        <button className='bg-white opacity-90   w-60 h-20 font-bold rounded-md text-2xl transition-all duration-300 hover:opacity-100 text-green-600 hover:scale-105 hover:bg-green-600 hover:text-white'>Get Started</button> 

      </div>

      <img className='w-1/2 overflow-hidden' src={image} alt="" />
    </div>
  )
}

export default HeroHome
