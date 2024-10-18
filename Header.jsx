import React from 'react'
import {FaBars} from "react-icons/fa";

function Header() {
  return (
    <>
    <div className='flex items-center justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <img src="./assets/logo.svg" alt="" />
        <button className="bg-gradient-to-r from-orange-400 to bg-red-400 text-white rounded-2xl text-md px-2.5 py-1.5">Hoster is hiring</button>

      </div>
      <div>
      <FaBars />
      </div>
     


    </div>
  
   

          
    </>
  )
}

export default Header
