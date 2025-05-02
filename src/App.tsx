import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./pages/Hero"
import HomeLoan from "./pages/HomeLoan"
import Montage from "./pages/Montage"
import Nav from "./components/Nav"
import LoanOptions from "./pages/LoanOptions"


function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes >
      <Route path="/" element={<Hero/>} />
      <Route path="/home-loan" element={<LoanOptions/>} />
    {/*
    <HomeLoan />
    <Montage /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
