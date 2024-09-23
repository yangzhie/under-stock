"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Ticker from "./Ticker";

interface StockData {
  ticker: string;
  name: string;
  exchange_short: string | null;
  exchange_long: string | null;
  mic_code: string;
  currency: string;
  price: number;
  day_high: number;
  day_low: number;
  day_open: number;
  "52_week_high": number;
  "52_week_low": number;
  market_cap: number | null;
  previous_close_price: number;
  previous_close_price_time: string;
  day_change: number;
  volume: number;
  is_extended_hours_price: boolean;
  last_trade_time: string;
}

function SlidingTickers() {
  const [stockData, setStockData] = useState<StockData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.NEXT_PUBLIC_STOCKDATA_100PERDAY_MAIN;

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response1 = await fetch(
          `https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=${apiKey}`
        );
        const response2 = await fetch(
          `https://api.stockdata.org/v1/data/quote?symbols=CSL%2CBHP%2CCBA&api_token=${apiKey}`
        );
        const response3 = await fetch(
          `https://api.stockdata.org/v1/data/quote?symbols=VOO%2CSPY%2CGOOG&api_token=${apiKey}`
        );

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        const mergedData: StockData[] = [
          ...data1.data,
          ...data2.data,
          ...data3.data,
        ];

        setStockData(mergedData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = async () => {
      setLoading(true); // start loading
      await Promise.all([fetchStockData()]); // fetch both data concurrently
      setLoading(false); // end loading
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex justify-evenly gap-8 mt-10 items-center overflow-hidden">
        <motion.div
          className="flex gap-8 items-center"
          initial={{ x: "100%" }} // start from outside the screen
          animate={{ x: "-100%" }} // move to the left of the screen
          transition={{
            ease: "linear",
            duration: 50, // duration of the animation (adjust for speed)
            repeat: Infinity, // repeat infinitely
          }}
        >
          {[...stockData!, ...stockData!].map((data, index) => (
            <Ticker
              key={index}
              stockName={data.ticker}
              stockPrice={data.price}
              perChange={data.day_change}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default SlidingTickers;
