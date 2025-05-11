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
    <div className="flex items-center flex-col" >
      <div className="text-center p-10 text-3xl md:text-4xl text-gray font-bold" >
        Why Choose Prime <span className="text-card">Mortgage</span>?
      </div>
      <div className="xl:flex m-5 items-center md:justify-center w-4/5 lg:w-full gap-y-5 xl:gap-10 md:grid-cols-2  grid grid-cols-1 text-white">
      {cards.map((card,index)=>
      <div key={index} className="">
      <div className="bg-card shadow-md shadow-card card flex flex-col cursor-pointer items-center text-center justify-self-center gap-7 md:gap-6 md:h-72 w-72 p-4 md:p-3 md:pt-12  xl:w-64 rounded-xl">
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
