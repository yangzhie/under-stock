import React from "react";

function NewsPanel() {
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
      <div className="mt-3">
        <div className="text-[12px] flex items-center">
          {clock}
          <span className="ml-[5px]">12:54pm</span>
        </div>
        <div className="p-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          molestias reiciendis! Veniam aborum.
        </div>
        <hr className="border border-[#9ca2fb] mt-2" />
      </div>

      <div className="mt-3">
        <div className="text-[12px] flex items-center">
          {clock}
          <span className="ml-[5px]">12:54pm</span>
        </div>
        <div className="p-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          molestias reiciendis! Veniam aborum.
        </div>
        <hr className="border border-[#9ca2fb] mt-2" />
      </div>

      <div className="mt-3">
        <div className="text-[12px] flex items-center">
          {clock}
          <span className="ml-[5px]">12:54pm</span>
        </div>
        <div className="p-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          molestias reiciendis! Veniam aborum.
        </div>
        <hr className="border border-[#9ca2fb] mt-2" />
      </div>

      <div className="mt-3">
        <div className="text-[12px] flex items-center">
          {clock}
          <span className="ml-[5px]">12:54pm</span>
        </div>
        <div className="p-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          molestias reiciendis! Veniam aborum.
        </div>
        <hr className="border border-[#9ca2fb] mt-2" />
      </div>

      <div className="mt-3">
        <div className="text-[12px] flex items-center">
          {clock}
          <span className="ml-[5px]">12:54pm</span>
        </div>
        <div className="p-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          molestias reiciendis! Veniam aborum.
        </div>
        <hr className="border border-[#9ca2fb] mt-2" />
      </div>

      <div className="mt-3">
        <div className="text-[12px] flex items-center">
          {clock}
          <span className="ml-[5px]">12:54pm</span>
        </div>
        <div className="p-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          molestias reiciendis! Veniam aborum.
        </div>
        <hr className="border border-[#9ca2fb] mt-2" />
      </div>
    </>
  );
}

export default NewsPanel;
