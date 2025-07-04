import React from "react";
import StatusFunc from "./status/StatusFunc";
import RUfunc from "./recentUpdates/RUfunc";
import ChannelFunc from "./channels/ChannelFunc";

const Updates = () => {
  return (
    <div className="theme-text">
 
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Updates</h1>
      </div>

   <StatusFunc />

   <RUfunc />

   <ChannelFunc />

          </div>
  );
};

export default Updates;