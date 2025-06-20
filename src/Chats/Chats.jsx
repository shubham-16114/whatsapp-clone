import React, { useState } from "react";
import Header1 from "./components/Header1";
import ChatList from "./components/ChatList";
import { FaPlus } from "react-icons/fa";

function Front() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col p-0 -m-4">
      <div className="p-0">
        <Header1 searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ChatList searchQuery={searchQuery} />
      </div>

      <div className="absolute bottom-16 right-4">
        <button className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full hover:bg-green-600">
          <FaPlus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Front;