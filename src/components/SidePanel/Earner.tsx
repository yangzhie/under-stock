import React from "react";

interface EarnerProps {
  ticker: string;
  price: string;
  perChange: string;
}

function Earner({ ticker, price, perChange }: EarnerProps) {
  return (
    <div>
      <div className="flex justify-around p-1">
        <span>{ticker}</span>
        <span>&#36;{price}</span>
        <span>{perChange}</span>
      </div>
      <hr className="border border-white mt-2" />
    </div>
  );
}

export default Earner;
