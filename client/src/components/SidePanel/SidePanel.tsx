"use client";
import React, { useEffect, useState } from "react";
import Earners from "./Earners";

function SidePanel() {
  // update time
  const [updateTime, setUpdateTime] = useState<string>("");

  // most actively traded
  const [mostActiveTrades, setMostActiveTrades] = useState<Object[]>([]);

  // top gainer
  const [topGainers, setTopGainers] = useState<Object[]>([]);

  // top losers
  const [topLosers, setTopLosers] = useState<Object[]>([]);

  useEffect(() => {
    const fetchEarnersData = async () => {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo"
      );
      const data = await response.json();

      setUpdateTime(data.last_updated);
      setMostActiveTrades(data.most_actively_traded);
      setTopGainers(data.top_gainers)
      setTopLosers(data.top_losers)
    };

    fetchEarnersData();
  }, []);
  return (
    <>
      <div className="mt-3">
        <Earners
          title="Most Traded"
          updateTime={updateTime}
          data={mostActiveTrades}
        />
        <Earners
          title="Top Gainers"
          updateTime={updateTime}
          data={topGainers}
        />
        <Earners
          title="Top Losers"
          updateTime={updateTime}
          data={topLosers}
        />
      </div>
    </>
  );
}

export default SidePanel;
