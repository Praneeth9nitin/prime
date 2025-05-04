import { loanOption } from "../content/content"
import arrow from "../assets/arrow.svg"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

function HomeLoan() {
    useGSAP(()=>{
        gsap.from(".header",{
            y:-100,
            opacity:0,
            duration:1,
            stagger:0.5,
            ease:"power2.out",
            scrollTrigger:{
                trigger:".head",
                start:"top 20%",
                end:"top 60%",
                markers:false
            }
        })
        
        gsap.from(".img",{
            y:100,
            opacity:0,
            duration:1,
            stagger:0.5,
            ease:"power2.out",
            scrollTrigger:{
                trigger:".img",
                start:"top bottom",
                end:"top 60%",
                markers:false
            }
        })
    })

  return (
    <div className="">
      <div className="text-center p-10">
        <div className=" text-card header text-xl font-extralight">POPULAR HOME LOANS</div>
        <div className="text-4xl header font-extrabold" >Which loan is right for <span className="text-card">YOU</span> ? </div>
      </div>
      <div className="md:flex grid grid-cols-1 md:p-10 justify-evenly">
        {loanOption.map((option, index)=>
            <div key={index} className="relative img font-family cursor-pointer m-2" >
                <img src={option.Image} className="rounded-md" alt="" />
                <div className="absolute rounded-md top-0 flex flex-col items-center justify-around text-white h-full house text-center">
                <div className="font-extrabold md:text-xl text-3xl" >{option.title}</div>
                <div className="md:text-sm">{option.description}</div>
                <img src={arrow} className="w-7 border-2 rounded-full border-white" alt="" />
                </div>
            </div>
            )}
      </div>
    </div>
  )
}

export default HomeLoan
