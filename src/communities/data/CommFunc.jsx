import React from "react";
import joinedCommunities from "./CommData";

const CommFunc = () => {
  return (
    <div>
      <h1 className="text-lg font-bold">Communities</h1>
      <div className="mt-4">

        <button className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg mb-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg text-white">
            +
          </div>
          <span className="text-white">New Community</span>
        </button>

        <div>
          <h2 className="text-sm font-semibold text-gray-300">Joined Communities</h2>
          <div className="mt-4 space-y-4">
            {joinedCommunities.map((community, index) => (
              <div className="flex items-center space-x-3" key={index}>
                {community.image ? (
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-700" />
                )}
                <div>
                  <h2 className="font-semibold">{community.name}</h2>
                  <p className="text-gray-400 text-sm">{community.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommFunc;