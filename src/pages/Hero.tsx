import HeroCard from "../components/HeroCard"
import HeroComponent from "../components/HeroComponent"
import HomeLoan from "./HomeLoan"
import Montage from "./Montage"

function Hero() {
  return (
    <div>
        <HeroComponent />
        <HeroCard />
        <HomeLoan />
        <Montage />
    </div>
  )
}

export default Hero
