import React from "react";
import ChannelsData from "./ChannelsData";

const ChannelFunc = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Channels</h2>
      <p className="text-gray-400 text-sm">
        Stay updated on topics that matter to you. Find channels to follow below.
      </p>

      <div className="mt-4">
        {ChannelsData.map((channel, index) => (
          <div className="flex items-center justify-between mb-4" key={index}>
            <div className="flex items-center space-x-4">
              <img
                src={channel.image}
                alt="Channel"
                className="w-12 h-12 rounded-full"
              />
              <div>

                <p className="font-bold">{channel.name}</p>
                <p className="text-gray-400 text-sm">{channel.followers}</p>
              </div>
            </div>
            <button className="bg-green-500 px-4 py-1 rounded-full text-white">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChannelFunc;