import React from 'react';

function HorizontalBarChart({ data }) {
  function getBarColor(value) {
    if (value >= 80) {
      return 'bg-red-500';
    } else if (value >= 60) {
      return 'bg-orange-500';
    } else if (value >= 25) {
      return 'bg-green-500';
    } else {
      return 'bg-green-500';
    }
  }

  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <div
          className="flex items-center mt-8 text-[#1965BF] font-bold"
          key={item.label}
          title={`Usage: RM ${item.allowance_used}\nSpending Limit: RM ${item.allowance_limit}`}
        >
          <div className="w-40 text-xs">{item.label}</div>
          <div className="w-full bg-gray-300 h-3 rounded-full relative overflow-hidden ml-2">
            <div
              className={`h-full absolute left-0 top-0 ${getBarColor(
                item.value
              )}`}
              style={{ width: `${item.value}%`, borderRadius: '9999px' }}
            />
          </div>
          <div className="ml-2 text-xs">{`${item.value}%`}</div>
        </div>
      ))}
    </div>
  );
  
  
}

export default HorizontalBarChart;

