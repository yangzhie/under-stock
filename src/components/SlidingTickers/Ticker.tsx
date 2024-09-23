import React from "react";

const greenTriangle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="green"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <polygon points="12,4 4,20 20,20" />
  </svg>
);

const redTriangle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="red"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <polygon points="12,20 4,4 20,4" />
  </svg>
);

interface TickerProps {
  stockName: string
  stockPrice: number
  perChange: number
}

function Ticker({ stockName, stockPrice, perChange }: TickerProps) {
  return (
    <>
      <div className="text-white p-1 px-2 rounded-md bg-gray-800">
        <div className="flex gap-2">
          <span>{stockName}</span>
          <span>${stockPrice}</span>
          <span className="flex items-center">{perChange > 0 ? greenTriangle : redTriangle}</span>
          <span>{perChange}%</span>
        </div>
      </div>
    </>
  );
}

export default Ticker;
