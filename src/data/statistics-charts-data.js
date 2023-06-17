import { chartsConfig } from "@/configs";

chartsConfig.xaxis.labels.style.colors = "#494F55"; // Change x-axis label color
chartsConfig.yaxis.labels.style.colors = "#494F55"; // Change y-axis label color

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Claimed",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#4B80F7",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 7,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Claimed",
      data: [400, 40, 300, 320],
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

const completedTasksChart = {
  ...dailySalesChart,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Expenditure History",
    description: "Expenditure history tracks and records",
    footer: "last refresh 1 day(s) ago",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Benefits claimed by Expenditure",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Request Approved",
    description: "Employee request approved",
    footer: "just updated",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
