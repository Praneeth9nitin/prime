import { loanOptions } from "../content/content"

function LoanGrid() {
  return (
    <div className="flex justify-evenly">
      <div className="m-7">
        <div className="grid grid-cols-4 p-7 bg-card">
            <div>Loan Type</div>
            <div>Down Payment</div>
            <div>Terms</div>
            <div>Mortage Insurance</div>
        </div>
        <div className="">
        {loanOptions.map((option,index)=>
            <div key={index} className="even:bg-lgray grid grid-cols-4 p-7" >
                <div>{option.loanType} <div>Learn more</div></div>
                <div>{option.downPayment}</div>
                <div>{option.terms}</div>
                <div>{option.mortageInsurance}</div>
            </div>
            
            )}
        </div>
      </div>
      <div>
        <div className="bg-card text-white m-4 flex flex-col justify-center items-center p-7">
        <div className="text-3xl">What's Your Property Worth?</div>
        <div className="border-2 border-white">Find Out Now!</div>
        </div>
      </div>
    </div>
  )
}

export default LoanGrid
