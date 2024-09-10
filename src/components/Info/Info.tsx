import React from "react";

function Info() {
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
      <div className="flex flex-col text-white justify-center w-1/2">
        <div className="text-[30px]">Big Stock Test</div>
        <div className="text-[18px]">Ticker</div>
        <div className="flex text-[20px] gap-4">
          <div>Price</div>
          <div className="flex">
            <div>{greenTriangle}</div>
            <div>Change</div>
          </div>
          <div>Percent Change</div>
        </div>
      </div>
    </>
  );
}

export default Info;
