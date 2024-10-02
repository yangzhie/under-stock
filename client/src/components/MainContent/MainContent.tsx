import React from "react";
import ContinentStock from "../Tables/Tables";
import SidePanel from "../SidePanel/SidePanel";

function MainContent() {
  return (
    <>
      <div className="text-white flex w-full p-14 gap-14 mt-20">
        <div className="flex flex-col w-full h-full gap-y-16">
          <ContinentStock />
        </div>
        <div className="w-[600px] h-full">
          <SidePanel />
        </div>
      </div>
    </>
  );
}

export default MainContent;
