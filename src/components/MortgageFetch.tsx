import { title } from "../content/content"
import arrow from '../assets/arrow.svg'

function MortgageFetch() {
  return (
    <div className="md:flex text-center md:justify-evenly">
    {title.map((item,index)=>
      <div key={index}>
        <div className="text-2xl font-bold">{item}</div>
        <div className="grid grid-cols-2 gap-8 shadow-2xl p-3 px-6 md:p-12 xl:p-6 xl:px-20 m-3 rounded-2xl bg-white" >
            <div className="col-span-2 text-sm items-center text-center">PURCHASE - 30 YEAR FIXED</div>
            <div><div className="text-xs">RATE</div><div className="text-card font-bold text-lg">7.63%</div></div>
            <div><div className="text-xs">TW change</div><div className="flex items-center justify-center md:justify-around"><img src={arrow} className="bg-green-600 w-4 rounded-full -rotate-90" alt="" /><span>1.14%</span></div></div>
            <div><div className="text-xs">APR</div><div className="text-card font-bold text-lg">8.613%</div></div>
            <div><div className="text-xs">TW change</div><div className="flex items-center md:justify-around justify-center"><img src={arrow} className="bg-red-600 w-4 rounded-full rotate-90" alt="" /><span>1.14%</span></div></div>
        </div>
        <div className="grid grid-cols-2 gap-8 shadow-2xl p-3 bg-white px-6 md:p-12 xl:p-6 xl:px-20 m-3 rounded-2xl" >
            <div className="col-span-2 text-xs">REFINANCE - 30 YEAR FIXED</div>
            <div><div className="text-xs">RATE</div><div className="text-card font-bold text-lg">7.63%</div></div>
            <div><div className="text-xs">TW change</div><div className="flex items-center md:justify-around justify-center"><img src={arrow} className="bg-green-600 w-4 rounded-full -rotate-90" alt="" /><span>1.14%</span></div></div>
            <div><div className="text-xs">APR</div><div className="text-card font-bold text-lg">8.613%</div></div>
            <div><div className="text-xs">TW change</div><div className="flex items-center md:justify-around justify-center"><img src={arrow} className="bg-red-600 w-4 rounded-full rotate-90" alt="" /><span>1.14%</span></div></div>
        </div>
      </div>
    )}
  </div>
  )
}

export default MortgageFetch
