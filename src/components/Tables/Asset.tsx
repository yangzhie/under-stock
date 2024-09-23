import React from "react";

interface AssetProps {
  assetName?: string;
  assetValue?: number;
  assetNetChange?: number;
  assetPercentDayChange?: number;
  assetPercentMonthChange?: number;
  assetPercentYearChange?: number;
}

function Asset({
  assetName,
  assetValue,
  assetNetChange,
  assetPercentDayChange,
  assetPercentMonthChange,
  assetPercentYearChange,
}: AssetProps) {
  return (
    <>
      <tr>
        <td className="text-left border-b p-5">{assetName}</td>
        <td className="text-right border-b">{assetValue}</td>
        <td className="text-right border-b">{assetNetChange}</td>
        <td className="text-right border-b">{assetPercentDayChange}</td>
        <td className="text-right border-b">{assetPercentMonthChange}</td>
        <td className="text-right border-b">{assetPercentYearChange}</td>
      </tr>
    </>
  );
}

export default Asset;
