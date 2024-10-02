import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

function Footer() {
  return (
    <>
      <div className="text-white">
        <div className="flex justify-end mr-[155px]">
          <Image src={logo} alt="logo" width={"200"} />
        </div>
        <div className="flex justify-center">
          <div className="w-[600px] border-t-[1px] border-gray-400 p-5">
            <div className="flex gap-10">
              <p>Terms of service</p>
              <p>Do not sell my information</p>
            </div>
            <div className="flex gap-10 mt-2">
              <p>Trademarks</p>
              <p>Privacy policy</p>
            </div>
          </div>
          <div className="w-[600px] border-l-[1px] border-t-[1px] border-gray-400 p-5">
            <div className="flex gap-10">
              <p>Careers</p>
              <p>Made in MEL</p>
              <p>Advertise</p>
              <p>Help</p>
            </div>
            <div className="text-[#9ca2fb] font-bold text-[15px] mt-2">
              &copy;2024 Under L.P. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
