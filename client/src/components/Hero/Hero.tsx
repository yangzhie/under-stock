import React from "react";
import Image from "next/image";
import heroImage from "@/public/hero-image.jpg";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center gap-[100px] mt-5 bg-[#171717]">
        <div>
          <div className="text-[35px] text-[#9ca2fb] font-normal">
            The information that matters.
          </div>
          <div className="gradient text-[50px] font-bold">
            Every detail, everywhere.
          </div>
          <div className="flex justify-end mt-[20px]">
            <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none">
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Subscribe
              </span>
            </button>
          </div>
        </div>

        <div>
          <Image src={heroImage} alt="hero-image" width={700} />
        </div>
      </div>
    </>
  );
}

export default Hero;
