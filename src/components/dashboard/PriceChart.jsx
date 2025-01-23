import React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const PriceChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => new Date(d[0]).toLocaleDateString()),
    datasets: [
      {
        label: "Price (USD)",
        data: data.map((d) => d[1]),
        borderColor: "rgb(255, 119, 87)",
        backgroundColor: "rgba(255, 119, 87, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgb(255, 119, 87)",
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "rgb(229, 231, 235)",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `$${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg animate-slide-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Price History</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-lg bg-coral-100 text-coral-600 text-sm font-medium transition-colors hover:bg-coral-200">
            1D
          </button>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors">
            1W
          </button>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors">
            1M
          </button>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors">
            1Y
          </button>
        </div>
      </div>
      <div className="h-[400px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}

export default PriceChart

