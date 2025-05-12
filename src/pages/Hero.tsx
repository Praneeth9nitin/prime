import Contact from "../components/Contact"
import HeroCard from "../components/HeroCard"
import HeroComponent from "../components/HeroComponent"
import HomeLoan from "./HomeLoan"
import Montage from "./Montage"
import Footer from "../components/Footer"
import Calculator from "../components/Calculator"
function Hero() {
  return (
    <div>
        <HeroComponent />
        <HeroCard />
        <HomeLoan />
        <Montage />
        <Calculator />
        <div className="flex items-center justify-center">
        <Contact />
        </div>
        <Footer />
    </div>
  )
}

export default Hero
