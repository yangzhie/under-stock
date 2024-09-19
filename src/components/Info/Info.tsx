"use client";

import React, { useEffect } from "react";
import FollowButton from "./FollowButton";

interface Data {
  ticker: string;
  name: string;
  price: number;
  day_high: number;
  day_low: number;
  day_open: number;
  year_high: number;
  year_low: number;
  market_cap: number | null;
  close_price: number;
  day_change: number;
  volume: number;
}

interface InfoProps {
  data: Data | null;
}

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

function Info({ data }: InfoProps) {
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-col text-white w-[700px] mt-[60px]">
        <div className="flex items-center justify-between">
          <div className="text-[30px]">{data.name}</div>
          <div>
            <FollowButton />
          </div>
        </div>
        <div className="text-[18px]">{data.ticker}</div>
        <div className="flex text-[20px] gap-4 items-center">
          <div className="text-[25px]">{data.price}</div>
          <div className="flex">
            <div>{greenTriangle}</div>
            <div>{data.day_change}</div>
          </div>
          <div>{data.currency}</div>
        </div>
      </div>
    </>
  );
}

export default Info;
