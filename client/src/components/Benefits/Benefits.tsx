import React from "react";
import Benefit from "./Benefit";

function Benefits() {
  return (
    <>
      <div className="mt-20">
        <div className="flex justify-center text-[40px] text-white">
          Receive info like never before
        </div>
        <div className="flex justify-center text-[20px] text-white mt-2">
          Why choose Under?
        </div>
      </div>

      <Benefit />
    </>
  );
}

export default Benefits;
