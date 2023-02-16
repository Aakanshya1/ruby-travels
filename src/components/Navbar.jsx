import React from 'react'
import { ROUTES } from '../constants/route'
import {RxMagnifyingGlass} from "react-icons/rx"

export default function Navbar() {
  const handleToggle =()=>{
    const menu = document.querySelector(".menu")
    menu.classList.toggle("active")
    const navmenu = document.querySelector(".navlinks")
    navmenu.classList.toggle("slide")
  }
  return (
    <div className='navbar flex justify-between w-4/5 min-h-[7vh] h-fit  items-center  absolute z-10 text-white top-[30px] border-b-2 uppercase'>
    <div className="logo-area px-4 flex flex-row gap-[7px] items-center ">
      <span className=' w-[20px] h-[20px] rounded-full bg-red-600'></span>
      <span className='text-2xl font-bold'>Ruby</span>
    </div>
    <div className="menu-area flex flex-row h-full items-center justify-center relative  w-full">
      <div className="menu md:hidden flex flex-col items-center justify-center relative" onClick={handleToggle}>

      <span className='burger '></span>
      </div>
      <div className=".leading-3 ">
      <ul className="navlinks text-xl top-[100%] absolute justify-center items-center gap-4 flex flex-col z-10  p-4 backdrop-blur-lg w-full left-0 md:relative md:flex-row md:top-0 md:translate-x-0 md:backdrop-blur-none">
        {ROUTES.map((route,id)=>(
          <li key={`${route.path}-${id}`}>{route.title}</li>
          ))}
        </ul> 
     </div>
    </div>
    <div className="search-area text-3xl ">
    <RxMagnifyingGlass/>
    </div>

    </div>
  )
}

