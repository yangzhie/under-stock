import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

import Search from '../Search/Search'

function Head() {
  return (
    <>
      <div className="flex justify-evenly h-[75px] bg-[#171717]">
        <Image src={logo} alt="main-logo" width={"100"} className="mr-[740px]" />
        <Search />
      </div>
    </>
  );
}

export default Head;
