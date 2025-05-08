import { title } from "../content/content"
import arrow from '../assets/arrow.svg'

function MortgageFetch() {
  return (
    <div className="md:flex w-72 justify-self-center md:w-screen text-center md:justify-center">
    {title.map((item,index)=>
      <div key={index} className="md:flex flex-col gap-3">
        <div className="text-2xl font-bold col-span-2">{item}</div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 xl:gap-8 shadow-2xl sm:p-4 m-3 xl:px-16 p-4 rounded-2xl bg-white" >
            <div className="col-span-2 text-sm items-center text-center">PURCHASE - 30 YEAR FIXED</div>
            <div><div className="text-xs">RATE</div><div className="text-card font-bold text-lg">7.63%</div></div>
            <div><div className="text-xs">TW change</div><div className="flex items-center justify-center gap-2"><img src={arrow} className="bg-green-600 w-4 rounded-full -rotate-90" alt="" /><span>1.14%</span></div></div>
            <div><div className="text-xs">APR</div><div className="text-card font-bold text-lg">8.613%</div></div>
            <div><div className="text-xs">TW change</div><div className="flex items-center gap-2 justify-center"><img src={arrow} className="bg-red-600 w-4 rounded-full rotate-90" alt="" /><span>1.14%</span></div></div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 xl:gap-8 shadow-2xl m-3 sm:p-2 xl:px-11 bg-white p-4 rounded-2xl" >
            <div className="col-span-2 text-xs">REFINANCE - 30 YEAR FIXED</div>
            <div><div className="text-xs">RATE</div><div className="text-card font-bold text-lg">7.63%</div></div>
            <div><div className="text-xs">TW change</div><div className="flex items-center gap-2 justify-center"><img src={arrow} className="bg-green-600 w-4 rounded-full -rotate-90" alt="" /><span>1.14%</span></div></div>
            <div><div className="text-xs">APR</div><div className="text-card font-bold text-lg">8.613%</div></div>
            <div><div className="text-xs">TW change</div><div className="flex items-center gap-2 justify-center"><img src={arrow} className="bg-red-600 w-4 rounded-full rotate-90" alt="" /><span>1.14%</span></div></div>
        </div>
      </div>
    )}
  </div>
  )
}

export default MortgageFetch

// p-3 px-6 lg:p-12 xl:p-6 xl:px-16
