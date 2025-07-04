
import React from "react";
import RUdata from "./RUdata";

const RUfunc = () => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Recent updates</h2>
      <div className="mt-2">
        {RUdata.map((update, index) => (
          <div className="flex items-center space-x-4 mb-4" key={index}>
            <img
              src={update.image}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-green-500"
            />
            <div>
              <p className="font-bold">{update.name}</p>
              <p className="text-gray-400 text-sm">{update.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RUfunc;