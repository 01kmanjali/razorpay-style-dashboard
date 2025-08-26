"use client";

import { useEffect } from "react";
import ApexCharts from "apexcharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 60 },
  { name: "Mar", value: 380 },
  { name: "Apr", value: 210 },
  { name: "May", value: 240 },
  { name: "Jun", value: 500, highlight: true },
  { name: "Jul", value: 360 },
  { name: "Aug", value: 420 },
  { name: "Sep", value: 400 },
  { name: "Oct", value: 120 },
  { name: "Nov", value: 80 },
  { name: "Dec", value: 220 },
];

export default function RevenueChart() {
  useEffect(() => {
    const options = {
      chart: {
        type: "area",
        height: 200,
        toolbar: { show: false },
        foreColor: "",
        fontFamily: "Inter, sans-serif",
      },
      colors: ["#A9DFD8"],
      grid: {
        borderColor: "",
        row: { colors: ["transparent"], opacity: 0.2 },
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#A9DFD8"], 
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#0f172a"], // fade into bg
          inverseColors: false,
          opacityFrom: 0.6,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
      dataLabels: { enabled: false },
      tooltip: {
        theme: "dark",
        x: { show: false },
        shared: true,
        intersect: false,
      },
      
      series: [
        {
          name: "Revenue",
          data: data.map((d) => d.value),
        },
      ],
      xaxis: {
        categories: data.map((d) => d.name),
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: "#ccc" } },
      },
      yaxis: {
        labels: { style: { colors: "#ccc" } },
      },
      markers: {
        size: data.map((d) => (d.highlight ? 6 : 0)), // only June
        colors: "#FFA500",
        strokeColors: "#0f172a",
        strokeWidth: 2,
      },

    };

    const chart = new ApexCharts(
      document.querySelector("#revenue-chart"),
      options
    );
    chart.render();

    return () => chart.destroy();
  }, []);

  return (
    <div className="p-4 rounded-xl">

      <div id="revenue-chart"></div>
    </div>
  );
}
