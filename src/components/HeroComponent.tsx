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
            <div className="md:text-5xl text-3xl font-semibold head">Realize Your Dream of Home Ownership</div>
            <div className="head md:text-lg text-gray-400 ">Welcome to Lion Lending Services! We are your home loan experts,licensed in NC, SC, VA, FL and MD, and dedicated to making sure your purchase or refinance experience is top-notch.</div>
            <div className="flex gap-4 button">
                <button className="bg-white text-gray hover:scale-105 text-sm md:text-lg rounded-md p-1 px-3 md:p-2 md:px-6 cursor-pointer">Contact Us Today!</button>
                <button className="outline hover:outline-none hover:bg-card p-1 text-sm md:text-lg px-3 md:p-2 md:px-6 rounded-md cursor-pointer" >Apply Now</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default HeroComponent
