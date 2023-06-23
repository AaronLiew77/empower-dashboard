import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ data }) => {
  const options = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      }
    },
    legend: {
      show: false
    },
    markers: {
      fillColors: ['#FFFFFF'], // Set legend marker fill color to white
    },
   
    labels: data.labels,
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.labels[opts.seriesIndex] + ': ' + val + '%';
      },

      style: {
        fontSize: '12px',
        colors: ['#000000'],
        borderColor: ['#333333'],
        strokeColors: ['#333333'],
      },
      dropShadow: {
        enabled: false,
      },
      offsetX: 20, // Increase the horizontal offset
      offsetY: 20 // Increase the vertical offset
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: false,
              showAlways: false,
              label: 'Total',
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#373d3f',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0) + '%';
              }
            }
          }
        }
      },
      stroke: {
        width: 1,
        lineCap: 'round'
      }
    }
  };

  return (
    <ReactApexChart
      options={options}
      series={data.series}
      type="donut"
      height={250}
    />
  );
};

export default DonutChart;
