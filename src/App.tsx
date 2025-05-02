import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./pages/Hero"
import Nav from "./components/Nav"
import About from "./pages/About"
import Contactus from "./pages/Contactus"


function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes >
      <Route path="/" element={<Hero/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contactus/>} />
    {/*
    <HomeLoan />
    <Montage /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
