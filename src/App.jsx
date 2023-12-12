import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
  

  return (
    <UserContextProvider>
    <h1>hello</h1>
   <Login></Login>
    <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
