import React from 'react'

function MiniProfile() {
    
  return (
    <div className='flex items-center justify-between mt-14 ml-10 ' >
      <img className='rounded-full border p-[2px] h-14 w-14 ' src="https://wallpapercave.com/wp/wp5388908.jpg" alt="" />

      <div className='flex-1 mx-4' >
        <h2 className='font-bold' >Sukhdeep Singh</h2>
        <h3 className='text-sm text-gray-400 ' >Welcome to Instagram</h3>
      </div>
      <button className='text-blue-400 font-medium ' >Sign Out</button>
    </div>
    
  )
}

export default MiniProfile
