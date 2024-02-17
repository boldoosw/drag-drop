"use client";
import { Bar } from "react-chartjs-2";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
      label: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      datasets: [
        {
          label: "Sales",
          data: [15234, 224382, 19245, 16243, 28356, 14235, 31000],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgb(53,162,235,0.4)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: { position: top },
        title: { display: true, text: "Daily Revenue" },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <>
      <Bar
        data={{
          labels: [
            "Sqli",
            "XSS",
            "XXE",
            "Open Redirect",
            "Broken Authentication",
          ],
          datasets: [
            {
              label: "# of vulnerabilities",
              data: [15, 12, 6, 7, 4],
              backgroundColor: ["red", "yellow", "blue", "black", "green"],
              borderColor: "orange",
              borderWidth: 5,
            },
          ],
        }}
        options={chartOptions}
        height={300}
        width={500}
      />
    </>
  );
}
