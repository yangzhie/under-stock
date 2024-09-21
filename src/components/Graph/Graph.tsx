//7e806faeac22416d955ba1820e4a29d9

import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartDataProps {
  datetime: string;
  close: string;
  high: string;
  low: string;
  open: string;
  volume: string;
}

interface GraphProps {
  ticker: string
}

function Graph({ticker}: GraphProps) {
  const [chartData, setChartData] = useState({});
  const [interval, setInterval] = useState("1week");
  const [loading, setLoading] = useState(true);
  const twelveAPIKey = process.env.NEXT_PUBLIC_TWELVE_800_GRAPH;

  useEffect(() => {
    const graphData = async () => {
      try {
        const upTicker = ticker.toUpperCase();
        const response = await fetch(
          `https://api.twelvedata.com/time_series?symbol=${upTicker}&interval=${interval}&apikey=${twelveAPIKey}`
        );
        const res = await response.json();
        const data: ChartDataProps[] = res.values;

        const labels: string[] = data
          .map((element: ChartDataProps) => element.datetime)
          .reverse();
        const closePrices: number[] = data
          .map((element: ChartDataProps) => parseFloat(element.close))
          .reverse();
        setChartData({
          labels,
          datasets: [
            {
              data: closePrices,
              borderColor: "rgba(114, 75, 191, 1)",
              backgroundColor: "rgba(204, 179, 255, 0.1)",
              fill: true,
              tension: 0.4,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    graphData();
  }, [interval]);
  return (
    <>
      <div className="text-white flex flex-col w-[700px]">
        <div className="h-[300px] mt-[20px]">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Line
              data={chartData}
              options={{
                responsive: true,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Date",
                      color: "white",
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Price (USD)",
                      color: "white",
                    },
                  },
                },
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          )}
        </div>

        <select
          className="flex justify-center gap-5 bg-[#171717] w-20 focus:none"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
        >
          <option
            value="1min"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            1min
          </option>

          <option
            value="15min"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            15min
          </option>

          <option
            value="1h"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            1hr
          </option>

          <option
            value="4h"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            4hr
          </option>

          <option
            value="1day"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            1d
          </option>

          <option
            value="1week"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            1w
          </option>

          <option
            value="1month"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            1mo
          </option>
        </select>
      </div>
    </>
  );
}

export default Graph;
