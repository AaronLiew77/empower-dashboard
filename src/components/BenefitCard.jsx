import React from 'react';
import RadialBarChart from '../components/RadialBarChart';

const BenefitCard = ({ chartData, label}) =>  {
  return (
      <div className="petrol-rounded-box bg-[#697CE0] border border-[#5C97F0] rounded-xl pb-3">
        <h3 className='text-md text-[#FFFFFF] text-center font-bold mt-4 text-[#2B69F5]'>{label}</h3>
        <div className="bg-[#FFFFFF] rounded-xl w-10/12 m-auto">
          <RadialBarChart chartData={chartData} label='% Utilized' color='#2B69F5'/>
        </div>
        
      </div>
  );
}

export default BenefitCard;
