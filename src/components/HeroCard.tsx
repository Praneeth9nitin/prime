import { cards } from "../content/content"
import arrow from "../assets/arrow.svg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function HeroCard() {
  useGSAP(()=>{
    gsap.from(".card",{
      x:-100,
      opacity:0,
      duration:2,
      stagger:0.5,
      ease:"power2.out",
    })
  })

  return (
    <div className="md:flex items-center md:justify-evenly grid grid-cols-2 -mt-7 gap-3 cursor-pointer text-white">
      {cards.map((card,index)=>
      <div key={index} className="bg-card card flex flex-col items-center text-center justify-self-center justify-between h-52 md:p-8 w-40 p-4 md:w-52 rounded-xl">
        <img src={card.img} className="w-7" alt="" />
        <div className="text-lg">{card.title}</div>
        <button className="text-xs items-center gap-2 justify-center flex" ><span>{card.button}</span> <img src={arrow} className="w-5" alt="" /> </button>
      </div>
      )}
    </div>
  )
}

export default HeroCard
