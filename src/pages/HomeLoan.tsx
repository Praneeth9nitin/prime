import Carousel from "../components/Carousel"
import { loanOption } from "../content/content"

function HomeLoan() {

  return (
    <div className="">
      <div className="text-center p-10">
        <div className=" text-card header text-xl font-extralight">POPULAR HOME LOANS</div>
        <div className="text-4xl header font-extrabold" >Which loan is right for <span className="text-card">YOU</span> ? </div>
        <Carousel loanOption={loanOption} />
      </div>
    </div>
  )
}

export default HomeLoan
