import React from 'react'

function Aboutbg() {
  return (
    <div  className="main" >
      <div className='h-full bg-linear-to-t from-black to-transparent grid grid-cols-2 p-5 md:p-8'>
        <div className="text-white flex flex-col justify-evenly md:justify-center gap-7 col-span-2 md:col-span-1" >
            <div className="text-5xl head" >About Us</div>
            <div className="flex gap-4 button">
                <button className="bg-card hover:scale-105 rounded-md p-1 px-3 md:p-2 md:px-6 cursor-pointer">Contact Us Today!</button>
                <button className="bg-gray-500/30 hover:bg-card p-1 px-3 hover:scale-105 md:p-2 md:px-6 rounded-md cursor-pointer" >Apply Now</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Aboutbg
