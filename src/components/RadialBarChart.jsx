import React from 'react';
import Chart from 'react-apexcharts';

const RadialBarChart = ({ chartData, label, color='#FF4560' }) => {
  // Options for the chart
  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true, // Enable animations
        easing: 'easeinout', // Set the easing function
        speed: 750, // Set the animation speed
        animateGradually: {
          enabled: true,
          delay: 200, // Set the delay between series animations
        },
        dynamicAnimation: {
          enabled: true,
          speed: 500, // Set the dynamic animation speed
        },
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        track: {
          background: '#e0e0e0',
          strokeWidth: '97%',
          margin: 5,
        },
        hollow: {
            size: '60%',
          },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#333',
            offsetY: 5,
          },
          total: {
            show: true,
            label: label,
            color: '#999',
            fontSize: '12px', 
            formatter: function (w) {
              return `${chartData[0]} ${label}`;
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    colors: [color],
    labels: [''],
  };

  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type="radialBar"
      height="170"
    />
  );
};

export default RadialBarChart;
