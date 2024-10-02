import React from "react";

function Followings() {
    const cross = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
            viewBox="0 0 50 50"
            fill="red"
      >
        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
      </svg>
    );
  return (
    <>
      <div className="w-1/2 text-white">
        <table className="w-full">
          <thead>
            <tr className="text-right">
              <th className="text-left">Product</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Change</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-[30px]">
              <td className="border-b p-3">UK 100 - Cash</td>
              <td className="text-right border-b">6629.2</td>
              <td className="text-right border-b">4344.1</td>
              <td className="text-right border-b">3344.7</td>
              <td className="flex justify-evenly border-b p-3">
                <div>0.3%</div>
                <div>19.22</div>
              </td>
              <td>
                <button>{cross}</button>
              </td>
            </tr>

            <tr className="text-[30px]">
              <td className="border-b p-3">UK 100 - Cash</td>
              <td className="text-right border-b">6629.2</td>
              <td className="text-right border-b">4344.1</td>
              <td className="text-right border-b">3344.7</td>
              <td className="flex justify-evenly border-b p-3">
                <div>0.3%</div>
                <div>19.22</div>
              </td>
              <td>
                <button>{cross}</button>
              </td>
            </tr>

            <tr className="text-[30px]">
              <td className="border-b p-3">UK 100 - Cash</td>
              <td className="text-right border-b">6629.2</td>
              <td className="text-right border-b">4344.1</td>
              <td className="text-right border-b">3344.7</td>
              <td className="flex justify-evenly border-b p-3">
                <div>0.3%</div>
                <div>19.22</div>
              </td>
              <td>
                <button>{cross}</button>
              </td>
            </tr>

            <tr className="text-[30px]">
              <td className="border-b p-3">UK 100 - Cash</td>
              <td className="text-right border-b">6629.2</td>
              <td className="text-right border-b">4344.1</td>
              <td className="text-right border-b">3344.7</td>
              <td className="flex justify-evenly border-b p-3">
                <div>0.3%</div>
                <div>19.22</div>
              </td>
              <td>
                <button>{cross}</button>
              </td>
            </tr>

            <tr className="text-[30px]">
              <td className="border-b p-3">UK 100 - Cash</td>
              <td className="text-right border-b">6629.2</td>
              <td className="text-right border-b">4344.1</td>
              <td className="text-right border-b">3344.7</td>
              <td className="flex justify-evenly border-b p-3">
                <div>0.3%</div>
                <div>19.22</div>
              </td>
              <td>
                <button>{cross}</button>
              </td>
            </tr>

            <tr className="text-[30px]">
              <td className="border-b p-3">UK 100 - Cash</td>
              <td className="text-right border-b">6629.2</td>
              <td className="text-right border-b">4344.1</td>
              <td className="text-right border-b">3344.7</td>
              <td className="flex justify-evenly border-b p-3">
                <div>0.3%</div>
                <div>19.22</div>
              </td>
              <td>
                <button>{cross}</button>
              </td>
            </tr>

            <tr className="text-[30px]">
              <td className="border-b p-3">UK 100 - Cash</td>
              <td className="text-right border-b">6629.2</td>
              <td className="text-right border-b">4344.1</td>
              <td className="text-right border-b">3344.7</td>
              <td className="flex justify-evenly border-b p-3">
                <div>0.3%</div>
                <div>19.22</div>
              </td>
              <td>
                <button>{cross}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Followings;
