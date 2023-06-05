import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/stores";
import Loader from "../../components/Loader/Loader";
function Order() {
  const store = localStorage.getItem("store");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getOrders", store],
    queryFn: (store) => getOrders(store),
  });
  var newDate = [];
  data?.map((recep) => {
    newDate.push(new Date(recep.createdAt));
  });

  console.log(data);
  return (
    <div className="flex flex-col justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto w-full max-w-screen-lg">
          {data ? (
            <table className="table-fixed border border-gray-300 w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/5 py-2 px-4 text-left">Order Number</th>
                  <th className="w-1/5 py-2 px-4 text-left">Date</th>
                  <th className="w-1/5 py-2 px-4 text-left">Customer</th>
                  <th className="w-1/5 py-2 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((data, index) => {
                  return (
                    <tr className="border-b border-gray-300" key={data._id}>
                      <td className="py-2 px-4">ORD000{index}</td>
                      <td className="py-2 px-4">
                        {newDate[index].getDate() +
                          " " +
                          newDate[index].toLocaleString("default", {
                            month: "long",
                          }) +
                          " " +
                          newDate[index].getFullYear()}
                      </td>
                      <td className="py-2 px-4">{data.customerName}</td>
                      <td className="py-2 px-4">${data.total}.00</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h1>No orders yet</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Order;
