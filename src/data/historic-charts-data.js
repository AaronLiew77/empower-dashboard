import { chartsConfig } from "@/configs";

chartsConfig.xaxis.labels.style.colors = "#494F55"; // Change x-axis label color
chartsConfig.yaxis.labels.style.colors = "#494F55"; // Change y-axis label color

const dailySalesChart = {
    type: "line",
    height: 220,
    series: [
      {
        name: "Claimed",
        data: [3500, 4000, 3000, 3200],
      },
    ],
    options: {
      ...chartsConfig,
      colors: ["#4B80F7"],
      stroke: {
        lineCap: "round",
      },
      markers: {
        size: 5,
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: [
          "Petrol",
          "Gym",
          "Flexi",
          "Medical",
          
        ],
      },
    },
  };

export const historicChartsData = [
  {
    color: "white",
    title: "Historic Trends",
    description: "Historic Chart of Expenses and Benefits",
    footer: "last refresh 1 day(s) ago",
    chart: dailySalesChart,
  },
  
];

export default historicChartsData;
