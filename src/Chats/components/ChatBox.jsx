import React from "react";

function ChatBox({ name, lastMessage, time }) {
  return (
    <div className="flex items-center px-4 py-3 space-x-4 hover:bg-gray-700 cursor-pointer">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-gray-900 font-bold">
        {name[0]}
      </div>
      <div className="flex-1">
        <h2 className="text-sm font-semibold">{name}</h2>
        <p className="text-xs text-gray-400 truncate">{lastMessage}</p>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}

export default ChatBox;