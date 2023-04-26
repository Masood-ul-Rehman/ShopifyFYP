import React from 'react';
import StatsGrid from "./StatsGrid";
import BuyerProfileChart from './BuyerProfileChart';
import TransactionChart from './TransactionChart';

function Dashboradd() {


  return (
    <div className="flex flex-col gap-4">
			  <StatsGrid />

        <div className="flex flex-row gap-4 w-full">
				  <TransactionChart />
				  <BuyerProfileChart />
			  </div>
    </div>
  )
}

export default Dashboradd
