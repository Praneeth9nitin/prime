import HeroCard from "../components/HeroCard"
import HeroComponent from "../components/HeroComponent"
import Footer from "../components/Footer"
import Calculator from "../components/Calculator"

function Mortgagepage() {
  return (
    <div>
      <HeroComponent />
      <HeroCard />
      <div className="my-7">
        <Calculator />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Mortgagepage
