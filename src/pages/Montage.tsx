import MortgageFetch from "../components/MortgageFetch"

function Montage() {
  return (
    <div className="montage ">
      <div className="text-center p-10" >
        <div className=" text-card header text-xl font-extralight">CURRENT</div>
        <div className="text-4xl header font-extrabold">MORTGAGE <span className="text-card" >RATE</span></div>
      </div>
     <MortgageFetch />
     <div className="text-center xl:px-36 py-10 text-xs md:text-sm p-2">
     All mortgage rates displayed are provided by Zillow based on borrowers with credit scores between 680-740 and represent averages and trends. Mortgage rates change daily and vary depending on your unique situation. Please consult with Lion Lending Services to receive a personalized rate for your scenario.
     </div>
    </div>
  )
}

export default Montage
