import React from "react";

function ContinentStock() {
  return (
    <>
      <div>
        <div className="font-extrabold text-[40px]">Americas</div>
        <hr className="mt-2 border border-[#9ca2fb]" />
        <table className="w-full mt-1 border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="text-left border-b p-5">Name</th>
              <th className="text-right border-b">Value</th>
              <th className="text-right border-b">Net Change</th>
              <th className="text-right border-b">% Change</th>
              <th className="text-right border-b">1 Month</th>
              <th className="text-right border-b">1 Year</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-left border-b p-5">DOW JONES INDUS. AVG</td>
              <td className="text-right border-b">40,829.59</td>
              <td className="text-right border-b">+484.18</td>
              <td className="text-right border-b">+1.20%</td>
              <td className="text-right border-b">+3.37%</td>
              <td className="text-right border-b">+18.08%</td>
            </tr>

            <tr>
              <td className="text-left border-b p-5">S&P 500 INDEX</td>
              <td className="text-right border-b">5,471.05</td>
              <td className="text-right border-b">+62.63</td>
              <td className="text-right border-b">+1.16%</td>
              <td className="text-right border-b">+2.37%</td>
              <td className="text-right border-b">+22.74%</td>
            </tr>

            <tr>
              <td className="text-left border-b p-5">NASDAQ COMPOSITE</td>
              <td className="text-right border-b">16,884.61</td>
              <td className="text-right border-b">+193.78</td>
              <td className="text-right border-b">+1.16%</td>
              <td className="text-right border-b">+0.83%</td>
              <td className="text-right border-b">+22.69%</td>
            </tr>

            <tr>
              <td className="text-left border-b p-5">NYSE COMPOSITE INDEX</td>
              <td className="text-right border-b">18,859.70</td>
              <td className="text-right border-b">+196.56</td>
              <td className="text-right border-b">+1.05%</td>
              <td className="text-right border-b">+3.24%</td>
              <td className="text-right border-b">+18.77%</td>
            </tr>

            <tr>
              <td className="text-left border-b p-5">
                S&P/TSX COMPOSITE INDEX
              </td>
              <td className="text-right border-b">23,027.15</td>
              <td className="text-right border-b">+245.72</td>
              <td className="text-right border-b">+1.08%</td>
              <td className="text-right border-b">+3.21%</td>
              <td className="text-right border-b">+14.71%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ContinentStock;
