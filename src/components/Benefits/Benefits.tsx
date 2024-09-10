import React from "react";
import money from "@/public/money.png";

function Benefits() {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="white"
      style={{ display: "inline-block" }}
    >
      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
    </svg>
  );

  const globe = (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="white"
      style={{ display: "inline-block", width: "60px" }}
    >
      <path d="M24 46.54a22.16 22.16 0 1 1 22.16-22.16A22.18 22.18 0 0 1 24 46.54zm0-42.31a20.16 20.16 0 1 0 20.16 20.15A20.18 20.18 0 0 0 24 4.23z" />
      <path d="M23 2.46h2v43.08h-2z" />
      <path d="M2.84 23.38h42.31v2H2.84z" />
      <path d="m24.71 46.24-1.42-1.4C30.76 37.26 34.44 29.92 34.2 23c-.2-6.44-3.88-12.85-10.86-19l1.32-1.5C32.08 9 36 15.92 36.2 23c.25 7.42-3.61 15.25-11.49 23.24z" />
      <path d="M23.29 46.24C15.41 38.25 11.55 30.42 11.8 23c.2-7.08 4.12-14 11.54-20.52L24.66 4C17.68 10.15 14 16.56 13.8 23c-.24 6.9 3.44 14.24 10.91 21.82z" />
      <path d="M24 15.07a30.18 30.18 0 0 1-15.63-4.64l1-1.72c9.8 5.86 19.32 5.86 29.11 0l1 1.72A30.17 30.17 0 0 1 24 15.07zM9.4 40.05l-1-1.71c10.34-6.18 20.83-6.18 31.17 0l-1 1.71c-9.85-5.85-19.37-5.85-29.17 0z" />
    </svg>
  );

  const phone = (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      fill="white"
      style={{ display: "inline-block" }}
    >
      <path d="M85.81 120H34.19a8.39 8.39 0 0 1-8.38-8.39V8.39A8.39 8.39 0 0 1 34.19 0h51.62a8.39 8.39 0 0 1 8.38 8.39v103.22a8.39 8.39 0 0 1-8.38 8.39zM34.19 3.87a4.52 4.52 0 0 0-4.51 4.52v103.22a4.52 4.52 0 0 0 4.51 4.52h51.62a4.52 4.52 0 0 0 4.51-4.52V8.39a4.52 4.52 0 0 0-4.51-4.52z" />
      <path d="M73.7 10.32H46.3L39.28 3.3 42.01.57l5.89 5.88h24.2L77.99.57l2.73 2.73-7.02 7.02zM47.1 103.23h25.81v3.87H47.1z" />
    </svg>
  );
  return (
    <>
      <div className="mt-20">
        <div className="flex justify-center text-[40px] text-white">
          Receive info like never before
        </div>
        <div className="flex justify-center text-[20px] text-white mt-2">
          Why choose Under?
        </div>
      </div>

      <div className="flex justify-evenly">
        <div className="flex flex-col text-white items-center mt-10">
          <div>{globe}</div>
          <div className="mt-3 text-[25px]">1200+ Global Opportunities</div>
          <div className="mt-3 w-[200px] text-center">
            Hold AUD and USD and glide between Aussie and U.S. markets with just
            a tap.
          </div>
          <div className="flex mt-3">
            <a href="" className="text-[18px]">
              More on investing {arrow}
            </a>
          </div>
        </div>

        <div className="flex flex-col text-white items-center mt-10">
          <div>{globe}</div>
          <div className="mt-3 text-[25px]">1200+ Global Opportunities</div>
          <div className="mt-3 w-[200px] text-center">
            Hold AUD and USD and glide between Aussie and U.S. markets with just
            a tap.
          </div>
          <div className="flex mt-3">
            <a href="" className="text-[18px]">
              More on investing {arrow}
            </a>
          </div>
        </div>

        <div className="flex flex-col text-white items-center mt-10">
          <div>{globe}</div>
          <div className="mt-3 text-[25px]">1200+ Global Opportunities</div>
          <div className="mt-3 w-[200px] text-center">
            Hold AUD and USD and glide between Aussie and U.S. markets with just
            a tap.
          </div>
          <div className="flex mt-3">
            <a href="" className="text-[18px]">
              More on investing {arrow}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
