import { cards } from "../content/content"
import arrow from "../assets/arrow.svg"
import gsap from "gsap"
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react"

function HeroCard() {

  const nav = useNavigate()
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
      <div className="md:flex items-center md:justify-center gap-y-5 md:gap-10 grid grid-cols-2 text-white">
      {cards.map((card,index)=>
      <div key={index}  onClick={()=>nav(card.link)}>
        <div className="bg-card shadow-md shadow-card card flex flex-col cursor-pointer items-center text-center justify-self-center justify-center gap-5 h-52 md:p-4 w-44 p-4 md:w-54 xl:w-64 rounded-xl">
        <img src={card.img} className="w-7" alt="" />
        <div className="text-lg">{card.title}</div>
        <button className="text-xs items-center gap-2 justify-center flex" ><span>{card.button}</span> <img src={arrow} className="w-5" alt="" /> </button>
      </div>
      </div>
      )}
    </div>
    </div>
  )
}

export default HeroCard
