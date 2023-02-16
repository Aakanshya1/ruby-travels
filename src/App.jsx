import React from 'react'
import Home from './pages/Home'
import './App.css'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='w-screen h-screen flex flex-col relative items-center '>
      <Navbar/>
      <Home/>
    </div>
  )
}
