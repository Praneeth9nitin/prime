import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function HeroComponent() {
useGSAP(()=>{
  gsap.from(".head",{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.2,
    ease:"power2.out",
  })

  gsap.from(".button",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.2,
    ease:"power2.out",
  })
})

  return (
    <div  className="main" >
      <div className='h-full bg-linear-to-t from-black to-transparent grid grid-cols-2 p-5 md:px-36 md:p-8'>
        <div className="text-white flex flex-col justify-evenly md:justify-around col-span-2 md:col-span-1" >
            <div className="md:text-4xl text-3xl font-semibold head">Make Homeownership Simple and Stress-Free</div>
            <div className="head md:text-sm text-gray-400 ">Welcome to Prime Mortgage Services—your reliable partner in home financing. Whether you're buying a new home or refinancing your current one, we're here to guide you with expert advice, flexible loan options, and a commitment to service that puts you first.</div>
            <div className="flex gap-4 button">
                <button className="bg-white text-gray hover:scale-105 text-sm md:text-md rounded-md p-1 px-3 md:p-2 md:px-6 cursor-pointer">Contact Us Today!</button>
                <button className="outline hover:outline-none hover:bg-card p-1 text-sm md:text-md px-3 md:p-2 md:px-6 rounded-md cursor-pointer" >Apply Now</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default HeroComponent
