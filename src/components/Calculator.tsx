import React, { useState, ChangeEvent } from 'react';

interface FormData {
  purchasePrice: string;
  mortgageTerm: string;
  interestRate: string;
  downPayment: string;
  insuranceRate: string;
  annualInsurance: string;
  monthlyHOA: string;
  email: string;
}

const tabs = ['Conventional', 'FHA', 'VA', 'Refinance', 'Affordability'] as const;

const MortgageCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Conventional');
  const [formData, setFormData] = useState<FormData>({
    purchasePrice: '',
    mortgageTerm: '',
    interestRate: '',
    downPayment: '',
    insuranceRate: '',
    annualInsurance: '',
    monthlyHOA: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">MORTGAGE <span className='text-card'>CALCULATOR</span></h1>

      <div className="flex justify-center md:gap-6 mb-4 ">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`uppercase font-medium border-b-2 px-2 md:text-lg text-xs pb-1 ${
              activeTab === tab ? 'border-card text-card' : 'border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6">
        Conventional mortgages are ideal for buyers with good credit and money to put down.
        They typically require a higher down payment, usually 5%-20% and also have higher income
        and credit score requirements than government loans. Typical fixed-rate loans have a term
        of 30 or 15 years.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <form className="space-y-4">
          {[
            { label: 'Purchase Price', name: 'purchasePrice' },
            { label: 'Mortgage Term', name: 'mortgageTerm' },
            { label: 'Interest Rate (%)', name: 'interestRate' },
            { label: 'Down Payment ($)', name: 'downPayment' },
            { label: 'Mortgage Insurance Rate (%)', name: 'insuranceRate' },
          ].map(({ label, name }) => (
            <div key={name}>
              <label htmlFor={name} className="block font-medium mb-1">{label}</label>
              <input
                type="number"
                name={name}
                id={name}
                value={formData[name as keyof FormData]}
                onChange={handleChange}
                className="w-full border outline-none border-card rounded p-2"
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
                className="w-full border outline-none border-card rounded p-2"
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
                className="w-full border outline-none border-card rounded p-2"
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

          <div className="border border-card p-4 rounded-md">
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
                className="border border-card rounded p-2 outline-none w-full"
              />
              <button type="button" className="bg-card text-white px-4 rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
