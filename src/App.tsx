import { BrowserRouter } from "react-router-dom"
import Hero from "./pages/Hero"
import HomeLoan from "./pages/HomeLoan"

function App() {

  return (
    <BrowserRouter>
    <Hero />
    <HomeLoan />
    </BrowserRouter>
  )
}

export default App
