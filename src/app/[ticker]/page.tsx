"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "@/components/Head/Head";
import Navbar from "@/components/Navbar/Navbar";
import Info from "@/components/Info/Info";
import Graph from "@/components/Graph/Graph";
import Tabs from "@/components/Tabs/Tabs";
import Footer from "@/components/Footer/Footer";
import NewsPanel from "@/components/NewsPanel/NewsPanel";

interface StockData {
  ticker: string;
  name: string;
  price: number;
  day_high: number;
  day_low: number;
  day_open: number;
  "52_week_high": number;
  "52_week_low": number;
  market_cap: number | null;
  close_price: number;
  day_change: number;
  volume: number;
  currency: string;
  previous_close_price: number;
  last_trade_time: Date;
}

export default function StockPage({ params }: { params: { ticker: string } }) {
  const { ticker } = params;
  const [stockData, setStockData] = useState<StockData | null>(null);
  const stockDataAPIKey = process.env.NEXT_PUBLIC_STOCKDATA_100PERDAY_MAIN;
  const router = useRouter();

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `https://api.stockdata.org/v1/data/quote?symbols=${ticker}&api_token=${stockDataAPIKey}`
        );
        const data = await response.json();

        if (data.data.length === 0) {
          router.push("/404");
        } else {
          setStockData(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        router.push("/404");
      }
    };
    fetchStockData();
  }, [ticker, router]);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="top-0 sticky">
          <Head />
          <Navbar />
        </div>
        <div className="flex flex-col items-center">
          {/* <Info data={stockData} /> */}
          {/* <Graph ticker={ticker} /> */}
          {/* <Tabs ticker={ticker} /> */}
        </div>
        <div className="flex flex-col items-center w-[700px]">
          {/* <NewsPanel ticker={ticker} /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
