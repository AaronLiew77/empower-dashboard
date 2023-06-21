import React from 'react';
import Chart from 'react-apexcharts';

const StackedBarChart = () => {
  // Define the data for the chart
  const chartData = {
    options: {
      chart: {
        stacked: true,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      yaxis: {
        title: {
          text: 'Ringgit Malaysia',
        },
      },
      legend: {
        position: 'top',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
    },
    series: [
      {
        name: 'Petrol Allowance',
        data: [70, 100, 80, 90, 80, 70],
      },
      {
        name: 'Gym Allowance',
        data: [60, 90, 70, 80, 70, 60],
      },
      {
        name: 'Flexi Benefits',
        data: [100, 150, 120, 200, 180, 160],
      },
      {
        name: 'Meal Allowance',
        data: [50, 70, 90, 80, 70, 60],
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

export default StackedBarChart;
