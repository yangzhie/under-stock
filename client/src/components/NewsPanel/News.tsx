import React from "react";

interface NewsProps {
  newsDate: string;
  newsContent: string;
  newsURL: string;
}

function News({ newsDate, newsContent, newsURL }: NewsProps) {
  const clock = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="white"
      style={{ display: "inline-block" }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <line x1="12" y1="12" x2="12" y2="7" stroke="white" strokeWidth="2" />
      <line x1="12" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2" />
    </svg>
  );
  return (
    <>
      <div className="p-4 flex w-full">
        <a href={newsURL} className="mt-3">
          <div className="text-[12px] flex items-center text-white">
            {clock}
            <span className="ml-[5px]">{newsDate}</span>
          </div>
          <div className="p-1 text-white">{newsContent}</div>
          <hr className="border border-[#9ca2fb] mt-2" />
        </a>
      </div>
    </>
  );
}

export default News;
