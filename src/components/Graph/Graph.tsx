import React from "react";

function Graph() {
  return (
    <>
      <div className="text-white flex flex-col w-1/2">
        <div className="h-[300px] mt-[20px]">Graph</div>
        <div className="flex justify-center gap-5">
          <button
            role="link"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            1h
          </button>

          <button
            role="link"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            24h
          </button>

          <button
            role="link"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            1w
          </button>

          <button
            role="link"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            4w
          </button>

          <button
            role="link"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-indigo-800 after:opacity-0 after:transition after:duration-150 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100"
          >
            1y
          </button>
        </div>
      </div>
    </>
  );
}

export default Graph;
