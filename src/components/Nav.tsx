import logo from '../assets/Prime Group Logo31 (1).svg'
import arrow from '../assets/Border.svg'
import { loanOption,} from "../content/content"
import { Dropdown,} from "../components/Dropdown"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../assets/Prime Group Logo33.svg'
import ham from '../assets/ham.svg'
import cross from '../assets/cross.svg'

function Nav() {
  const [current, setCurrent] = useState(false)
  const [toggle, setToggle] = useState(true)
  const navigate = useNavigate()

  return (
    <div className=''>
      <div className='flex items-center justify-between pb-0 md:px-10 xl:px-36 md:p-3'>
        <div className='flex gap-3 p-3 md:p-0'>
        <img src={logo1} alt="" className='md:w-12 w-10' />
        <img src={logo} alt="" className='md:w-32 w-28' />
        </div>
        <div className='p-3 md:hidden' onClick={()=>setToggle((prop)=>!prop)} >
          {toggle?
          <img src={ham} alt="" />:
          <img src={cross} alt="" />
          }
        </div>
        <div className='md:flex hidden items-center gap-5' >
        <div className='flex gap-1.5 items-center' >
          <div>Follow Us</div>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-[#11193B] cursor-pointer hover:text-card" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#11193B] cursor-pointer hover:text-card" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        </div>
        <button className='bg-card text-white p-2 rounded-md text-sm px-6 cursor-pointer hover:scale-105 transition-all '>Apply Online</button>
        </div>
        </div>
        <ul className='gap-10 p-3 md:px-10 xl:px-36 text-white text-lg md:flex hidden justify-start bg-card' >
            <li onClick={()=>navigate("/")} className='cursor-pointer hover:underline' >Home</li>
            <li onClick={()=>navigate("/about")} className='flex hover:underline items-center gap-1 cursor-pointer'>About</li>
            <li className='flex items-center relative gap-1 hover:underline cursor-pointer' onMouseEnter={()=>setCurrent((prop)=>!prop)} onMouseLeave={()=>setCurrent((prop)=>!prop)} ><span>Loan Options</span>{current?<Dropdown nav={loanOption} className="absolute top-7 z-10 text-sm bg-white text-gray" /> :"" }<img className='w-7' src={arrow} alt="" /> </li>
            <li className='cursor-pointer hover:underline' > Mortgage Calculator </li>
            <li className='cursor-pointer hover:underline' onClick={()=>navigate('/contact')}>Contact</li>
        </ul>
        <ul className={`text-white bg-card md:hidden p-2 gap-3 flex flex-col ${toggle?"hidden":""}`}>
          <li onClick={()=>{navigate("/about");setToggle((prop)=>!prop)}}>About</li>
          <li><span className='flex items-center relative justify-between' onClick={()=>setCurrent((prop)=>!prop)}> <span>Loan Options</span> <img src={arrow} className='w-8' alt="" /></span>
          {current?<Dropdown nav={loanOption} className="absolute z-10 text-sm bg-white text-gray" /> :"" }
          </li>
          <li>Mortgage calculator</li>
          <li onClick={()=>{navigate("/contact");setToggle((prop)=>!prop)}}>Contact Us</li>
        </ul>
    </div>
  )
}

export default Nav
