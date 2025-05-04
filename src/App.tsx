import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./pages/Hero"
import Nav from "./components/Nav"
import About from "./pages/About"
import Contactus from "./pages/Contactus"
import Terms from "./pages/Terms"
import Privacypolicy from "./pages/Privacypolicy"
import Cookie from "./pages/Cookie"
import Smspolicy from "./pages/Smspolicy"
import Mortgagepage from "./pages/Mortgagepage"


function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes >
      <Route path="/" element={<Hero/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/mortgage" element={<Mortgagepage />} />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/terms-conditions" element={<Terms/>} />
      <Route path="/privacy-policy" element={<Privacypolicy />}/>
      <Route path="/cookie-policy" element={<Cookie />}/>
      <Route path="/sms-policy" element={<Smspolicy />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
