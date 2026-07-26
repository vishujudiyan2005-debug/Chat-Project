import React from 'react'
import { EllipsisVertical } from 'lucide-react';
const UserDashboard = () => {
  return (
    <div className='h-screen w-screen '>
    
    <div className='min-h-full w-1/3 bg-green-100  '>
       <div className='bg-green-400 p-3  fixed  w-1/3 px-5 flex justify-between rounded-b-lg shadow-2xl'>
        <h1 className='font-extrabold text-2xl'>Chat App</h1>
        <EllipsisVertical className='hover:bg-green-200 rounded-full hover:scale-110'/>
        </div> 

    <div className='bg-red-200 flex w-full'>
        hello
    </div>


    </div>
     
    </div>
  )
}

export default UserDashboard
