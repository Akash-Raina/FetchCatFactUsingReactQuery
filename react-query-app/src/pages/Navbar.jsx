import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className=' bg-slate-600 w-full h-14 grid grid-flow-col grid-cols-3 items-center font-bold text-lg text-white'>
        <span className='text-orange-400 text-2xl ml-8'>Facts</span>
        <div className='flex gap-2 justify-center'>
          <Link to={'/'} className='hover:text-gray-400'>Home</Link>
          <Link to={'/about'} className='hover:text-gray-400'>About</Link>
          <Link to={'/dogfacts'} className='hover:text-gray-400'>DogFacts</Link>
          <Link to = {'/catfacts'} className='hover:text-gray-400'>CatFacts</Link>
        </div>
        
        <div className='flex justify-end mr-10'><button className='rounded-lg bg-blue-600 w-28 h-8 hover:bg-blue-500'>Reach Us</button></div>
    </div>
  )
}

export default Navbar