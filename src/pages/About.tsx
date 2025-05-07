import Aboutbg from "../components/Aboutbg"
import AboutContent from "../components/AboutContent"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function About() {
  return (
    <div>
      <Aboutbg />  
      {/* <HeroCard/> */}
      <AboutContent />
      <div className="flex items-center justify-center">
      <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default About
