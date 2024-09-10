import React from "react";
import NewsPanel from "../NewsPanel/NewsPanel";
import ContinentStock from "../ContinentStock/ContinentStock";

function MainContent() {
  return (
    <>
      <div className="text-white flex w-full p-14 gap-14">
        <div className="flex flex-col w-full h-full gap-y-16">
          <ContinentStock />
          <ContinentStock />
          <ContinentStock />
          <ContinentStock />
        </div>
        <div className="w-[600px] h-full">
          <NewsPanel />
        </div>
      </div>
    </>
  );
}

export default MainContent;
