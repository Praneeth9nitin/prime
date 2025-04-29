import logo from '../assets/Prime Group Logo31 (1).svg'
import arrow from '../assets/Border.svg'
import { loanOption, about } from "../content/content"
import Dropdown from "../components/Dropdown"
import { useState } from 'react'
import ham from '../assets/ham.svg'
import cross from '../assets/cross.svg'

function Nav() {
  const [current, setCurrent] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <div className='flex items-center justify-between md:m-10 md:mb-6 mt-6 mx-4'>
        <img src={logo} alt="" className='md:w-40 w-24' />
        <ul className='md:flex justify-between gap-10 hidden' >
            <li className='flex items-center gap-1 cursor-pointer' onMouseEnter={()=>setCurrent("Loan")} onMouseLeave={()=>setCurrent("")} ><div><span>Loan Options</span>{current==="Loan"?<Dropdown nav={loanOption} className="text-center absolute text-sm" innerClassname='hover:bg-card' /> :"" }</div> <img className='w-3' src={arrow} alt="" /> </li>
            <li className='flex items-center gap-1 cursor-pointer' onMouseEnter={()=>setCurrent("about")} onMouseLeave={()=>setCurrent("")}><div><span>About</span>{current==="about"?<Dropdown nav={about} className="text-xs absolute p-3" /> :"" }</div> <img className='w-3' src={arrow} alt="" /> </li>
            <li className='cursor-pointer' > Calculator </li>
            <li className='flex items-center gap-1 cursor-pointer'><span>Resources</span> <img className='w-3' src={arrow} alt="" /> </li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        {
            toggle?
            <div className='md:hidden'>
              <img src={cross} onClick={()=>setToggle(prop=>!prop)} alt="" />
              <ul className='absolute right-2 flex flex-col gap-1 bg-linear-to-br from-card to-white p-4 text-white rounded-xl' >
              <li>Loan Options</li>
              <li>About</li>
              <li>Calculator</li>
              <li>Resources</li>
              <li>Contact</li>
            </ul>
            </div>
            :
            <img className='md:hidden' onClick={()=>setToggle(prop=>!prop)} src={ham} alt="" />
        }
        <button className='bg-card hidden md:block text-white p-2 rounded-md text-sm px-6 cursor-pointer hover:scale-105 transition-all '>Apply Online</button>
    </div>
  )
}

export default Nav
