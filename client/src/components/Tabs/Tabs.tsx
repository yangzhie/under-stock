"use client";

import React, { useEffect, useState } from "react";
import Tab from "./Tab";

interface TabsProps {
  ticker: string;
}

interface InfoProps {
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

function Tabs({ ticker }: TabsProps) {
  const [yearHigh, setYearHigh] = useState<number | null>(null);
  const [yearLow, setYearLow] = useState<number | null>(null);
  const [dayHigh, setDayHigh] = useState<number | null>(null);
  const [dayLow, setDayLow] = useState<number | null>(null);
  const [dayOpen, setDayOpen] = useState<number | null>(null);
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [volume, setVolume] = useState<number | null>(null);
  const [previousClosePrice, setPreviousClosePrice] = useState<number | null>(
    null
  );
  const [lastTradeTime, setLastTradeTime] = useState<string | null>(null);
  const [dollar, setDollar] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(true);
  const stockDataAPIKey = process.env.NEXT_PUBLIC_STOCKDATA_100PERDAY_MAIN;

  useEffect(() => {
    const fetchInfoData = async () => {
      try {
        const response = await fetch(
          `https://api.stockdata.org/v1/data/quote?symbols=${ticker}&api_token=${stockDataAPIKey}`
        );
        const data = await response.json();

        setYearHigh(data.data[0]["52_week_high"]);
        setYearLow(data.data[0]["52_week_low"]);
        setDayHigh(data.data[0].day_high);
        setDayLow(data.data[0].day_low);
        setDayOpen(data.data[0].day_open);
        setMarketCap(data.data[0].market_cap);
        setVolume(data.data[0].volume);
        setPreviousClosePrice(data.data[0].previous_close_price);
        setLastTradeTime(data.data[0].last_trade_time);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInfoData();
  }, [ticker]);
  return (
    <>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="text-white flex mt-[20px] w-1/2 flex-wrap justify-center gap-5 mb-[50px]">
          <Tab infoTitle="52 Week High" infoStat={yearHigh} />
          <Tab infoTitle="52 Week Low" infoStat={yearLow} />
          <Tab infoTitle="Day High" infoStat={dayHigh} />
          <Tab infoTitle="Day Low" infoStat={dayLow} />
          <Tab infoTitle="Day Open" infoStat={dayOpen} />
          <Tab
            infoTitle="Market Cap"
            infoStat={marketCap ?? "N/A"}
            dollar={false}
          />
          <Tab infoTitle="Volume" infoStat={volume} dollar={false} />
          <Tab infoTitle="Previous Close" infoStat={previousClosePrice} />
        </div>
      )}
    </>
  );
}

export default Tabs;
