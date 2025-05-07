import { cards } from "../content/content"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function HeroCard() {

  useGSAP(()=>{
    gsap.from(".card",{
      z:100,
      opacity:0,
      duration:2,
      stagger:0.5,
      ease:"power2.out",
    })
  })

  return (
    <div className="" >
      <div className="text-center p-10 text-3xl md:text-4xl text-gray font-bold" >
        Why Choose Prime <span className="text-card">Mortgage</span>?
      </div>
      <div className="xl:flex items-center md:justify-center gap-y-5 xl:gap-10 sm:grid-cols-2  grid grid-cols-1 text-white">
      {cards.map((card,index)=>
      <div key={index} className="">
        <div className="bg-card shadow-md shadow-card card flex flex-col cursor-pointer items-center text-center justify-self-center gap-7 md:gap-6 md:h-64 w-80 p-4 md:p-3 md:pt-6 lg:w-64 xl:w-72 rounded-xl">
        <img src={card.img} className="w-7" alt="" />
        <div className="text-lg">{card.title}</div>
        <div className="text-xs items-center gap-2 justify-center flex" >{card.button}</div>
      </div>
      </div>
      )}
    </div>
    </div>
  )
}

export default HeroCard
