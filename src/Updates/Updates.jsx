import React from "react";

const Updates = () => {
  return (
    <div>
 
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Updates</h1>
      </div>


      <div className="mb-4">
        <h2 className="text-lg font-semibold">Status</h2>
        <div className="flex items-center space-x-4 mt-2">
          <div className="relative">
            <img
              src=""
              alt="Status"
              className="w-12 h-12 rounded-full border-4 border-green-500"
            />
          </div>

          <div>
            <p className="font-bold">My Status</p>
            <p className="text-gray-400 text-sm">Tap to add status update</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Recent updates</h2>
        <div className="mt-2">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src=""
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-green-500"
            />
            <div>
              <p className="font-bold">The Amazing Fan</p>
              <p className="text-gray-400 text-sm">21 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src=""
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-green-500"
            />
            <div>
              <p className="font-bold">Manish Bhaiya</p>
              <p className="text-gray-400 text-sm">1:18 PM</p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h2 className="text-lg font-semibold">Channels</h2>
        <p className="text-gray-400 text-sm">
          Stay updated on topics that matter to you. Find channels to follow
          below.
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src=""
                alt="Channel"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">Amala Shaji</p>
                <p className="text-gray-400 text-sm">10.5M followers</p>
              </div>
            </div>
            <button className="bg-green-500 px-4 py-1 rounded-full text-white">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src=""
                alt="Channel"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">Matlabi Duniya</p>
                <p className="text-gray-400 text-sm">14.8M followers</p>
              </div>
            </div>
            <button className="bg-green-500 px-4 py-1 rounded-full text-white">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;