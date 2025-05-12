import { useState } from 'react';
import AffordCalculator from './AffordCalculator';
import ConventionalCalculator from './ConventionalCalculator';
import FHACalculator from './FHACalculator';
import VACalculator from './VACalculator';
import ReferenceCalculator from './ReferenceCalculator';

function Calculator() {
  const tabs = ['Conventional', 'FHA', 'VA', 'Refinance', 'Affordability'] as const;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Conventional');
  const cal = [{page:<ConventionalCalculator />, current:'Conventional'}, {page:<FHACalculator />, current:'FHA'}, {page:<VACalculator />, current:'VA'}, {page:<ReferenceCalculator/>, current:'Refinance'}, {page:<AffordCalculator/>, current:'Affordability'},]

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
      <>
      {cal.map(tab => (
        <div className={`${activeTab==tab.current? "block":"hidden"}`}>{tab.page}</div>
      ))}
      </>
    </div>
  )
}

export default Calculator
