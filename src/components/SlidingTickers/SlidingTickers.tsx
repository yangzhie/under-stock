import React from "react";
import Ticker from "./Ticker";

function SlidingTickers() {
  return (
    <>
      <div className="flex justify-evenly gap-8 mt-10 items-center">
        <Ticker />
      </div>
    </>
  );
}

export default SlidingTickers;
