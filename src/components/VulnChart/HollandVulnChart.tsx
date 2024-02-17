"use client";
import { Bar } from "react-chartjs-2";
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

type Props = {
  labels: string[];
  data: number[];
};

const VulnChart: React.FC<Props> = ({ labels, data }) => {
  return (
    <div>
      <Bar
        data={{
          labels: labels,
          //   labels: ["Хүн", "Байгаль", "Амьтан", "Техник", "Тэмдэгт"],
          datasets: [
            {
              label: "# Хариултын тоо ",
              data: data,
              //   data: [15, 12, 6, 7, 40],
              backgroundColor: [
                "rgb(252, 182, 164)",
                "rgb(245, 232, 59)",
                "rgb(173, 179, 247)",
                "rgb(120, 120, 125)",
                "rgb(155, 217, 154)",
              ],
              borderColor: "gray",
              // borderColor: "rgb(53,162,235)",
              // backgroundColor: "rgb(53,162,235,0.4)",
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          indexAxis: "y",
          maintainAspectRatio: false,
          // elements: {
          //   bar: {
          //     borderWidth: 2,
          //   },
          // },
          // responsive: true,
          // plugins: {
          //   legend: {
          //     position: "right",
          //   },
          //   title: {
          //     display: true,
          //     text: "Chart.js Horizontal Bar Chart",
          //   },
          // },
        }}
      />
    </div>
  );
};
export default VulnChart;
