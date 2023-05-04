import React from "react";
import StatsGrid from "./StatsGrid";
import BuyerProfileChart from "./BuyerProfileChart";
import TransactionChart from "./TransactionChart";
import Order from "./Order";

function Dashboradd() {
  return (
    <div className="flex flex-col gap-4">
      <StatsGrid />

      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>

      <div className="mt-8  min-h-screen">
        <h1 className="font-poppins text-xl font-semibold">Orders</h1>
        <Order />
      </div>
    </div>
  );
}

export default Dashboradd;
