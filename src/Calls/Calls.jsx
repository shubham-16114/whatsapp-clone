import React from "react";

function Calls() {
  return (
    <div>
      <h1 className="text-lg font-bold">Calls</h1>
      <div className="mt-4">
        <h2 className="text-sm font-semibold text-gray-300">Favorites</h2>
        <button className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg mb-4">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
          </div>
          <span className="text-white">Add Favorite</span>
        </button>
        <h2 className="text-sm font-semibold text-gray-300">Recent Calls</h2>
        <div className="mt-4 flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-700"></div>
          <div>
            <h2 className="font-semibold">Noctis</h2>
            <p className="text-gray-400 text-sm">January 12, 1:05 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calls;