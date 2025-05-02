import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./pages/Hero"
import LoanOptions from "./pages/LoanOptions"
import Nav from "./components/Nav"


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
