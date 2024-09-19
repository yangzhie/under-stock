import React from 'react'

function Ticker() {
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
  return (
    <>
      <div className="text-white p-1 px-2 rounded-md bg-gray-800">
        <p>S&P 500 5,471 {redTriangle} +1.16%</p>
      </div>
    </>
  );
}

export default Ticker