import { title } from "../content/content"
import arrow from '../assets/arrow.svg'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import navigate from '../assets/navigate.svg'


function MortgageFetch() {

  const [clicked, setClicked] = useState(0)
  const [check,setCheck] = useState(true)

    useGSAP(()=>{
      if (check){
        setCheck(false)
        return null
      }
        gsap.to('.cards',{
          x:clicked*-100/5+"%",
          ease:"power2.inOut"
        })
    },[clicked])

    const size = function screenSize(){
      if (window.innerWidth<=425)
        return {left:-2,right:2}
      else
        return {left:-1,right:1}
    }

  return (
    <div className="relative">
      <div className="flex absolute w-screen justify-between md:p-10 p-4 top-48 z-10">
        <img src={navigate} onClick={()=>clicked!=size().left?setClicked((clicked)=>clicked-1):null} width={40} className="rotate-180 cursor-pointer" alt="" />
        <img src={navigate} width={40} onClick={()=>clicked!=size().right?setClicked((clicked)=>clicked+1):null} alt="" className="cursor-pointer" />
      </div>

    <div className="flex lg:gap-20 cards justify-self-center list text-center ">
    {title.map((item,index)=>
      <div key={index} className="flex items-center flex-col gap-3 transition-all duration-500 item">
        <div className="xl:text-2xl xl:w-full text-xl font-bold col-span-2">{item}</div>
        <div className="grid xl:w-80 w-60 grid-cols-2 gap-8 sm:gap-6 xl:gap-8 shadow-2xl sm: m-3 xl:px-9 p-4 rounded-2xl bg-white" >
            <div className="col-span-2 text-xs items-center text-center">PURCHASE - 30 YEAR FIXED</div>
            <div><div className="text-xs">RATE</div><div className="text-card font-bold text-lg">7.63%</div></div>
            <div><div className="text-xs">TW</div><div className="flex items-center justify-center gap-2"><img src={arrow} className="bg-green-600 w-4 rounded-full -rotate-90" alt="" /><span>1.14%</span></div></div>
            <div><div className="text-xs">APR</div><div className="text-card font-bold text-lg">8.613%</div></div>
            <div><div className="text-xs">TW</div><div className="flex items-center gap-2 justify-center"><img src={arrow} className="bg-red-600 w-4 rounded-full rotate-90" alt="" /><span>1.14%</span></div></div>
        </div>
        <div className="grid xl:w-80 w-60 grid-cols-2 gap-8 sm:gap-6 xl:gap-8 shadow-2xl m-3 sm:p-2 xl:px-9 bg-white p-4 rounded-2xl" >
            <div className="col-span-2 text-xs">REFINANCE - 30 YEAR FIXED</div>
            <div><div className="text-xs">RATE</div><div className="text-card font-bold text-lg">7.63%</div></div>
            <div><div className="text-xs">TW</div><div className="flex items-center gap-2 justify-center"><img src={arrow} className="bg-green-600 w-4 rounded-full -rotate-90" alt="" /><span>1.14%</span></div></div>
            <div><div className="text-xs">APR</div><div className="text-card font-bold text-lg">8.613%</div></div>
            <div><div className="text-xs">TW</div><div className="flex items-center gap-2 justify-center"><img src={arrow} className="bg-red-600 w-4 rounded-full rotate-90" alt="" /><span>1.14%</span></div></div>
        </div>
      </div>
    )}
  </div>
  </div>
  )
}

export default MortgageFetch



