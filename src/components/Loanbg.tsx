import phone from "../assets/phone.svg"

function Loanbg() {
  return (
    <div className='loan'>
      <div className="h-full bg-linear-to-b to-black from-transparent flex flex-col justify-around md:justify-end p-3 md:px-10">
        <div className="text-card text-4xl font-bold md:text-5xl md:p-5" >Loan Options</div>
        <div className="md:text-4xl text-3xl text-lgray md:p-5" >Apply Now</div>
        <div className="flex gap-4 text-lgray md:p-5">
                <button className="bg-gray-500/30 p-1 px-2 hover:scale-105 rounded-md md:p-2 md:px-6 cursor-pointer">Send an Email</button>
                <button className="bg-card px-2 items-center hover:scale-105 md:p-2 md:px-6 rounded-md cursor-pointer flex gap-2" ><img className="w-5" src={phone} alt="" /><span>(000)000-000</span></button>
        </div>
      </div>
    </div>
  )
}

export default Loanbg
