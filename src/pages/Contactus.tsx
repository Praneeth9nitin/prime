import Contact1 from "../components/Contact1"
import Footer from "../components/Footer"
import HeroComponent from "../components/HeroComponent"

function Contactus() {
  return (
    <div>
      <HeroComponent />
      <div className="2xl:w-3/5 2xl:flex items-center justify-center">
      <div className="xl:px-36 p-8 flex flex-col gap-6 font-josefin">
        <div>
        <div className="md:text-4xl text-2xl font-bold">Contact Us</div>
        <div>Home Contact</div>
        </div>
        <div className="md:text-5xl text-3xl font-semibold">Contact Prime Mortgage Services</div>
      </div>
      </div>
      <div className="flex justify-center items-center">
      <Contact1 />
      </div>
      <Footer />
    </div>
  )
}

export default Contactus
