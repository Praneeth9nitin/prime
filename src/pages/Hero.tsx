import Contact from "../components/Contact"
import HeroCard from "../components/HeroCard"
import HeroComponent from "../components/HeroComponent"
import HomeLoan from "./HomeLoan"
import Montage from "./Montage"
import Calculator from "../components/Calculator"
import Footer from "../components/Footer"

function Hero() {
  return (
    <div>
        <HeroComponent />
        <HeroCard />
        <HomeLoan />
        <Montage />
        <Calculator />
        <Contact />
        <Footer />
    </div>
  )
}

export default Hero
