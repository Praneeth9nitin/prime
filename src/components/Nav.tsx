import logo from '../assets/Prime Group Logo31 (1).svg'
import arrow from '../assets/Border.svg'
import { loanOption, socialMedia } from "../content/content"
import { Dropdown, Dropdown1 } from "../components/Dropdown"
import { useState } from 'react'

function Nav() {
  const [current, setCurrent] = useState("")

  return (
    <div className=''>
      <div className='flex items-center justify-between p-2 md:p-5'>
        <img src={logo} alt="" className='md:w-40 w-22' />
        <div className='flex items-center md:gap-5 gap-2' >
        <div className='cursor-pointer' onMouseEnter={()=>setCurrent("media")} onMouseLeave={()=>setCurrent("")} ><button onClick={()=>{current==="media"?setCurrent(""):setCurrent("media")}}>follow us</button>
          {current==="media"?<Dropdown1  nav={socialMedia} className="bg-gray md:bg-slate-800/30 absolute md:right-40 p-3" innerClassname='hover:text-card' /> :"" }
        </div>
        <button className='bg-card text-white p-2 rounded-md text-sm px-6 cursor-pointer hover:scale-105 transition-all '>Apply Online</button>
        </div>
        </div>
        <ul className='md:gap-10 md:p-5 p-2 md:text-lg text-sm flex justify-between md:justify-start bg-card' >
            <li className='flex items-center relative gap-1 cursor-pointer' onMouseEnter={()=>setCurrent("Loan")} onMouseLeave={()=>setCurrent("")} ><span>Loan Options</span>{current==="Loan"?<Dropdown nav={loanOption} className="text-center absolute top-7 text-sm" innerClassname='hover:bg-card' /> :"" }<img className='w-3' src={arrow} alt="" /> </li>
            <li className='flex items-center gap-1 cursor-pointer'>About</li>
            <li className='cursor-pointer' > Calculator </li>
            <li className='flex items-center gap-1 cursor-pointer'><span>Resources</span> <img className='w-3' src={arrow} alt="" /> </li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Nav
