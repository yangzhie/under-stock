"use client";

import React, { useEffect, useState } from "react";
import Table from "./Table";

interface MutualFundInfoProps {
  country: string;
  currency: string;
  exchange: string;
  fund_family: string;
  fund_type: string;
  mic_code: string;
  name: string;
  performance_rating: number;
  risk_rating: number;
  symbol: string;
}

interface ETFProps {
  country: string;
  fund_family: string;
  fund_type: string;
  mic_code: string;
  name: string;
  symbol: string;
}

function Tables() {
  const [mutualFundInfo, setMutualFundInfo] =
    useState<MutualFundInfoProps[] | null>(null);
  const [ETFInfo, setETFInfo] = useState<ETFProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.NEXT_PUBLIC_TWELVE_800_GRAPH;

  useEffect(() => {
    const fetchMFData = async () => {
      try {
        const response = await fetch(
          `https://api.twelvedata.com/mutual_funds/list?outputsize=10&apikey=${apiKey}`
        );
        const data = await response.json();

        setMutualFundInfo(data.result.list);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchETFData = async () => {
      try {
        const response = await fetch(
          `https://api.twelvedata.com/etfs/list?outputsize=10&apikey=${apiKey}`
        );
        const data = await response.json();

        setETFInfo(data.result.list);
      } catch (error) {
        console.log(error);
      }
    };

    // ensures all data is properly loaded before sending to child components
    const fetchData = async () => {
      setLoading(true); // start loading
      await Promise.all([fetchMFData(), fetchETFData()]); // fetch both data concurrently
      setLoading(false); // end loading
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <Table assetCategory="Mutual Funds" MFData={mutualFundInfo} />
        <Table assetCategory="ETFs" ETFData={ETFInfo} />
        {/* <Table assetCategory="Crypto" /> */}
      </div>
    </>
  );
}

export default Tables;
