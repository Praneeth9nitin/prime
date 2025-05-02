import { cards } from "../content/content"
import Tilt from 'react-parallax-tilt';
import arrow from "../assets/arrow.svg"
import gsap from "gsap"
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react"

function HeroCard() {

  const nav = useNavigate()
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
    <div className="md:p-10 pt-5" >
      <div className="text-center p-8 text-3xl md:text-4xl text-gray md:m-16 font-bold" >
        Why Choose Prime <span className="text-card">Mortgage</span>?
      </div>
      <div className="md:flex items-center md:justify-evenly grid grid-cols-2 gap-3 text-white">
      {cards.map((card,index)=>
      <div key={index}  onClick={()=>nav(card.link)}>
        <Tilt className="bg-card shadow-md md:shadow-2xl shadow-card card flex flex-col cursor-pointer items-center text-center justify-self-center justify-between h-52 md:p-8 w-40 p-4 md:w-52 rounded-xl">
        <img src={card.img} className="w-7" alt="" />
        <div className="text-lg">{card.title}</div>
        <button className="text-xs items-center gap-2 justify-center flex" ><span>{card.button}</span> <img src={arrow} className="w-5" alt="" /> </button>
      </Tilt>
      </div>
      )}
    </div>
    </div>
  )
}

export default HeroCard
