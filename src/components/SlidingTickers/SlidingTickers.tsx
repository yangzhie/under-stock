import React from "react";

function SlidingTickers() {
  const greenTriangle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="green"
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
      <div className="flex justify-evenly gap-8 mt-6 items-center">
        <div className="text-white p-1 px-2 rounded-md bg-gray-800">
          S&P 500 5,471 UP +1.16%
        </div>
        <div className="text-white p-1 px-2 rounded-md bg-gray-800">
          <p>
            S&P 500 5,471 {redTriangle} +1.16%
          </p>
        </div>
        <div className="text-white p-1 px-2 rounded-md bg-gray-800">
          S&P 500 5,471 UP +1.16%
        </div>
        <div className="text-white p-1 px-2 rounded-md bg-gray-800">
          S&P 500 5,471 UP +1.16%
        </div>
        <div className="text-white p-1 px-2 rounded-md bg-gray-800">
          S&P 500 5,471 UP +1.16%
        </div>
        <div className="text-white p-1 px-2 rounded-md bg-gray-800">
          S&P 500 5,471 UP +1.16%
        </div>
      </div>
    </>
  );
}

export default SlidingTickers;
