import React from "react";
import Earner from "./Earner";

interface EarnersProps {
  title: string;
  updateTime: string;
  data: any;
}

interface EarnerData {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
}

function Earners({ title, updateTime, data }: EarnersProps) {
  return (
    <>
      <div className="mt-4">
        <div className="text-[25px] text-[#9ca2fb] flex items-center justify-between align-baseline p-1 font-medium">
          {title}
          <span className="text-[10px] p-1 mt-[10px]">
            Updated: {updateTime}
          </span>
        </div>

        {data.map((element: EarnerData, index: number) => {
          return (
            <Earner
              key={index}
              ticker={element.ticker}
              price={element.price}
              perChange={element.change_percentage}
            />
          );
        })}
      </div>
    </>
  );
}

export default Earners;
