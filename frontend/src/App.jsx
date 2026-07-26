import React from 'react'
import api from './api/axios.js'
import HomePage from './components/HomePage.jsx'
import { Routes , Route} from 'react-router-dom'

import UserDashboard from './components/UserDashboard.jsx'

const App = () => {

  
  return (
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/userdashboard' element={<UserDashboard/>}/>
   </Routes>
  )
}

export default App
