import React from 'react'

function Body() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-center'>
        <img src="./assets/blue-shape.svg" alt="1st" className=' -rotate-[45] h-64 md:72' />
        <img src="./assets/pink-shape.svg" alt="second" className='absolute  -rotate-[30deg] h-64 md:72 ' />
        <img src="./assets/purple-shape.svg" alt="third" className='absolute -rotate-[15deg] h-64 md:72' />
        <img src="./assets/hero-model.png" alt="hero" className='absolute h-64 md:72' />

      </div>
      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold font-playlist leading-tight">Host your Website in less than 5 minutes</h1>
        <p className="font-loto text-gray-600 text-2xl font-sm">get your wesite and running in no less than 5 minutes</p>
        <form action="" className='flex flex-col gap-4 md:flex-row'>
          <input className='rounded-md px-4 py-2 placeholder:text-red-500 text-xl' type="email" placeholder='enter your email'/>
          <button className='rounded-md px-4 py-4 bg-blue-400 text-2xl font-bold hover:bg-blue-600 text-white'>Jion Playlist </button>
        </form>
      </div>
      <div className='flex items-center gap-4 mt-6 text-xl font-bold'>
        <img src="./assets/checkmark.svg" alt="check" />
        <p className='text-slate-600 font-loto'>no spam . Unscribe anytime</p>
      </div>
    </div>
      
      
    
  )
}

export default Body
