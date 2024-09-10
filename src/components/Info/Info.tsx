import React from "react";

function Info() {
  const greenTriangle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="green"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <polygon points="12,4 4,20 20,20" />
    </svg>
  );

  const redTriangle = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="red"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <polygon points="12,20 4,4 20,4" />
    </svg>
  );
  return (
    <>
      <div className="flex flex-col text-white w-1/2 mt-[60px]">
        <div className="flex items-center justify-between">
          <div className="text-[30px]">Big Stock Test</div>
          <div>
            <button className="group inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-indigo-600 px-4 font-medium text-neutral-200 duration-500">
              <div className="inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                <div className="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="pl-6">Follow</span>
                <div className="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="text-[18px]">Ticker</div>
        <div className="flex text-[20px] gap-4 items-center">
          <div className="text-[25px]">Price</div>
          <div className="flex">
            <div>{greenTriangle}</div>
            <div>Change</div>
          </div>
          <div>Percent Change</div>
        </div>
      </div>
    </>
  );
}

export default Info;
