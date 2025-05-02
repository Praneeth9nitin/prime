import logo from '../assets/Prime Group Logo31 (1).svg'
import arrow from '../assets/Border.svg'
import { loanOption, socialMedia } from "../content/content"
import { Dropdown, Dropdown1 } from "../components/Dropdown"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../assets/Prime Group Logo33.svg'

function Nav() {
  const [current, setCurrent] = useState("")
  const navigate = useNavigate()

  return (
    <div className=''>
      <div className='flex items-center justify-between p-2 md:p-5'>
        <div className='flex justify-center gap-1'>
        <img src={logo1} alt="" className='md:w-12 w-8 self-start' />
        <img src={logo} alt="" className='md:w-40 w-22' />
        </div>
        <div className='flex items-center md:gap-5 gap-2' >
        <div className='cursor-pointer' onMouseEnter={()=>setCurrent("media")} onMouseLeave={()=>setCurrent("")} ><button onClick={()=>{current==="media"?setCurrent(""):setCurrent("media")}}>follow us</button>
          {current==="media"?<Dropdown1  nav={socialMedia} className="bg-gray md:bg-slate-800/30 absolute md:right-40 p-3" innerClassname='hover:text-card' /> :"" }
        </div>
        <button className='bg-card text-white p-2 rounded-md text-sm px-6 cursor-pointer hover:scale-105 transition-all '>Apply Online</button>
        </div>
        </div>
        <ul className='md:gap-10 md:p-5 p-3 md:text-lg text-sm flex justify-between md:justify-start bg-card' >
            <li onClick={()=>navigate("/")} className='cursor-pointer' >Home</li>
            <li onClick={()=>navigate("/about")} className='flex items-center gap-1 cursor-pointer'>About</li>
            <li className='flex items-center relative gap-1 cursor-pointer' onMouseEnter={()=>setCurrent("Loan")} onMouseLeave={()=>setCurrent("")} ><span>Loan Options</span>{current==="Loan"?<Dropdown nav={loanOption} className="absolute top-7 z-10 text-sm bg-white text-gray" /> :"" }<img className='w-3' src={arrow} alt="" /> </li>
            <li className='cursor-pointer' > Calculator </li>
            <li className='cursor-pointer' onClick={()=>navigate('/contact')}>Contact</li>
        </ul>
    </div>
  )
}

export default Nav
