import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Aboutbg() {
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
      <div className='h-full bg-linear-to-t from-black to-transparent p-5 md:px-36'>
        <div className="text-white flex flex-col justify-center py-20 gap-7" >
            <div className="text-5xl head font-semibold" >About Us</div>
            <div className="flex gap-4 button">
            <button className="bg-white text-sm md:text-lg text-gray hover:scale-105 rounded-md p-1 px-3 md:p-2 md:px-6 cursor-pointer">Contact Us Today!</button>
            <button className="outline text-sm md:text-lg hover:outline-none hover:bg-card p-1 px-3 md:p-2 md:px-6 rounded-md cursor-pointer" >Apply Now</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Aboutbg
