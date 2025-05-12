import React, { useState, ChangeEvent } from 'react';

interface FormData {
  loanBalance: string;
  newInterestRate: string;
  newLoan: string;
  estimateCost: string;
  annualInsurance: string;
  monthlyHOA: string;
  email: string;
}


const ReferenceCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    loanBalance: '',
    newInterestRate: '',
    newLoan: '',
    estimateCost: '',
    annualInsurance: '',
    monthlyHOA: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>

      <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto mb-6">
      Refinancing means replacing your existing mortgage with a new loan, usually to secure a lower interest rate, adjust your loan term, or access your home equity. This can help reduce your monthly payments, lower your interest costs, or allow you to tap into the value of your home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <form className="space-y-4">
          {[
            { label: 'Current Loan Balance', name: 'loanBalance' },
            { label: 'New Interest Rate (%)', name: 'newInterestRate' },
            { label: 'New Loan Term In Year', name: 'newLoan' },
            { label: 'Estimated Closing Cost ($)', name: 'closingCost' },
          ].map(({ label, name }) => (
            <div key={name}>
              <label htmlFor={name} className="block font-medium mb-1">{label}</label>
              <input
                type="number"
                name={name}
                id={name}
                value={formData[name as keyof FormData]}
                onChange={handleChange}
                className="w-full border outline-none border-gray rounded p-2"
              />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="annualInsurance" className="block font-medium mb-1">Annual Insurance</label>
              <input
                type="number"
                name="annualInsurance"
                id="annualInsurance"
                value={formData.annualInsurance}
                onChange={handleChange}
                className="w-full border outline-none border-gray rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="monthlyHOA" className="block font-medium mb-1">Monthly HOA</label>
              <input
                type="number"
                name="monthlyHOA"
                id="monthlyHOA"
                value={formData.monthlyHOA}
                onChange={handleChange}
                className="w-full border outline-none border-gray rounded p-2"
              />
            </div>
          </div>
        </form>

        {/* Output Section */}
        <div className="space-y-5">
          <div className='flex items-center gap-2'>
            <p className="font-medium text-lg">Monthly Payment:</p>
            <p className="text-card text-3xl font-bold">$1,560</p>
          </div>

          <div className="border border-gray p-4 rounded-md">
            <p className="font-medium mb-2">Monthly Payment</p>
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
              [Bar Chart Here]
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {[
                { color: 'bg-orange-300', label: 'Principal & Interest' },
                { color: 'bg-red-600', label: 'Monthly Insurance' },
                { color: 'bg-orange-400', label: 'Monthly Taxes' },
                { color: 'bg-red-800', label: 'Monthly PMI' },
                { color: 'bg-red-400', label: 'Monthly HOA' },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className={`w-3 h-3 ${color} inline-block rounded-full`}></span> {label}
                </div>
              ))}
            </div>
          </div>

          {/* Email Capture */}
          <div>
            <p className="text-card font-semibold">Want a Copy of the Results?</p>
            <div className="flex gap-2 mt-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray rounded p-2 outline-none w-full"
              />
              <button type="button" className="bg-card text-white px-4 rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceCalculator;
