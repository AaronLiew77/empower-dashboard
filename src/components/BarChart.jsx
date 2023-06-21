import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  // Define the data for the chart
  const chartData = {
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      yaxis: {
        title: {
          text: 'Ringgit Malaysia (in thousands)',
        },
      },
    },
    series: [
      {
        name: 'Currency Value',
        data: [30, 40, 35, 50, 45, 55, 50],
      },
    ],
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  );
};

export default BarChart;
