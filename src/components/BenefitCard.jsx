import React from 'react';
import RadialBarChart from '../components/RadialBarChart';

const BenefitCard = ({ chartData, label}) =>  {
  return (
      <div className="petrol-rounded-box">
        <h3 className='text-md text-center font-bold mt-4 text-[#2B69F5]'>{label}</h3>
        <RadialBarChart chartData={chartData} label='% Utilized' color='#2B69F5'/>
      </div>
  );
}

export default BenefitCard;
