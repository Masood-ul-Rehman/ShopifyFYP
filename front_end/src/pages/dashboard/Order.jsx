import React from "react";

function Order() {
  return (
    <div className="flex flex-col justify-center">
      <div className="overflow-x-auto w-full max-w-screen-lg">
        <table className="table-fixed border border-gray-300 w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-1/5 py-2 px-4 text-left">Order Number</th>
              <th className="w-1/5 py-2 px-4 text-left">Date</th>
              <th className="w-1/5 py-2 px-4 text-left">Customer</th>
              <th className="w-1/5 py-2 px-4 text-left">Total</th>
              <th className="w-1/5 py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-2 px-4">ORD0001</td>
              <td className="py-2 px-4">2022-01-01</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">$100.00</td>
              <td className="py-2 px-4">Pending</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 px-4">ORD0002</td>
              <td className="py-2 px-4">2022-01-02</td>
              <td className="py-2 px-4">Jane Doe</td>
              <td className="py-2 px-4">$200.00</td>
              <td className="py-2 px-4">Shipped</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 px-4">ORD0003</td>
              <td className="py-2 px-4">2022-01-03</td>
              <td className="py-2 px-4">Bob Smith</td>
              <td className="py-2 px-4">$150.00</td>
              <td className="py-2 px-4">Delivered</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 px-4">ORD0004</td>
              <td className="py-2 px-4">2022-01-04</td>
              <td className="py-2 px-4">Sarah Johnson</td>
              <td className="py-2 px-4">$75.00</td>
              <td className="py-2 px-4">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
