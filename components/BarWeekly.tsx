
import { useEffect } from "react";
import ApexCharts from "apexcharts";

export default function BarWeekly() {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Earning",
          data: [2800, 3890, 1800, 2200, 2500, 2100, 3200],
        },
      ],
      chart: {
        type: "bar",
        height: 160,
        toolbar: { show: false },
        fontFamily: "Inter, sans-serif",
      },
      colors: ["#A9DFD8"],
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 6,
          borderRadiusApplication: "end",
          backgroundBar: {
            enabled: true,
            color: "#2F2F35",
            radius: 8,
          },
        },
      },
      dataLabels: { enabled: false },
      grid: { show: false },
      xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
        labels: {
          style: {
            colors: "#aaa",
            fontSize: "12px",
          },
        },
        axisBorder: { show: true, color: "#2F2F35" },
        axisTicks: { show: false },
      },
      yaxis: { show: false },
      tooltip: {
        theme: "dark",
        y: {
          formatter: (val: number) => `₹ ${val.toLocaleString()}`,
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#column-chart"),
      options
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="max-w-fit w-full rounded-lg shadow-sm dark:bg-gray-800">
      <div id="column-chart"></div>
    </div>
  );
}
