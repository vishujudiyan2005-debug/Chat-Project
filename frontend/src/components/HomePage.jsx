import React, { useState } from 'react'
import Navbar from './Navbar'
import HeroHome from './HeroHome'
import Register from './Register'
import Signin from './Signin'

function HomePage() {

  const [showRegister, setShowRegister] = useState(false)
  const [showSignin, setShowSignin] = useState(false)
  console.log (showRegister)
  return (
    <>
    <div className={(showRegister || showSignin)? 'blur-sm bg-green-200 min-h-screen flex flex-col':'bg-green-200 min-h-screen flex flex-col'}>
      <Navbar  setShowRegister={setShowRegister}/>
      <HeroHome/>
    </div>

    {
      showRegister &&(
        <Register  setShowRegister={setShowRegister}  setShowSignin={setShowSignin}  close={()=>setShowRegister(false)}/>
      )
    }

    {
      showSignin&&(
        <Signin setShowRegister={setShowRegister} setShowSignin={setShowSignin} close={()=>setShowSignin(false)} />
      )
    }

    </>
  )
}

export default HomePage
