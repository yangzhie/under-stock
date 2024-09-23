"use client";

import React, { useEffect, useState } from "react";
import Asset from "./Asset";

interface Data {
  country: string;
  currency?: string;
  exchange?: string;
  fund_family: string;
  fund_type: string;
  mic_code: string;
  name: string;
  performance_rating?: number;
  risk_rating?: number;
  symbol: string;
}

interface TableProps {
  assetCategory: string;
  MFData?: Data[] | null;
  ETFData?: Data[] | null;
}

function Table({ assetCategory, MFData, ETFData }: TableProps) {
  const [MFSymbol, setMFSymbol] = useState<string | null>(null);
  const [ETFSymbol, setETFSymbol] = useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_TWELVE_800_GRAPH;

  useEffect(() => {
    if (MFData && MFData.length > 0) {
      setMFSymbol(MFData[0].symbol);
    }
    if (ETFData && ETFData.length > 0) {
      setETFSymbol(ETFData[0].symbol);
    }
  }, [MFData, ETFData]);

  useEffect(() => {
    const fetchMFData = async () => {
      if (MFSymbol) {
        const response = await fetch(
          `https://api.twelvedata.com/mutual_funds/world/summary?symbol=${MFSymbol}&apikey=${apiKey}`
        );
        const MFStats = await response.json();
        console.log(MFStats);
      }
    };

    const fetchETFData = async () => {
      if (ETFSymbol) {
        const response = await fetch(
          `https://api.twelvedata.com/etfs/world/summary?symbol=${ETFSymbol}&apikey=${apiKey}`
        );
        const ETFStats = await response.json();
        console.log(ETFStats);
      }
    };

    fetchMFData();
    fetchETFData();
  }, [MFSymbol, ETFSymbol]);
  return (
    <>
      <div className="font-extrabold text-[40px]">{assetCategory}</div>
      <hr className="mt-2 border border-[#9ca2fb]" />
      <table className="w-full mt-1 border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left border-b p-5">Name</th>
            <th className="text-right border-b">Value</th>
            <th className="text-right border-b">Net Change</th>
            <th className="text-right border-b">% Change</th>
            <th className="text-right border-b">1 Month</th>
            <th className="text-right border-b">1 Year</th>
          </tr>
        </thead>

        <tbody>
          {/* Add a conditional check to avoid rendering Asset when data is missing */}
          {MFData &&
            MFData.map((item) => (
              <Asset
                key={item.symbol}
                assetName={item.name}
                assetValue={0} // Replace with actual data when available
                assetNetChange={0} // Replace with actual data when available
                assetPercentDayChange={0} // Replace with actual data when available
                assetPercentMonthChange={0} // Replace with actual data when available
                assetPercentYearChange={0} // Replace with actual data when available
              />
            ))}

          {ETFData &&
            ETFData.map((item) => (
              <Asset
                key={item.symbol}
                assetName={item.name}
                assetValue={0} // Replace with actual data when available
                assetNetChange={0} // Replace with actual data when available
                assetPercentDayChange={0} // Replace with actual data when available
                assetPercentMonthChange={0} // Replace with actual data when available
                assetPercentYearChange={0} // Replace with actual data when available
              />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
