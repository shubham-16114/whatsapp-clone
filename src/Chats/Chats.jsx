import React, { useState } from "react";
import Header1 from "./components/Header1";
import ChatList from "./components/ChatList";
// import { FaPlus } from "react-icons/fa";

function Front() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col h-[calc(100%+1rem)] -m-4 mb-0 theme-text">
      <Header1 searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ChatList searchQuery={searchQuery} />


      {/* <div className="fixed bottom-24 right-6 z-50">
        <button className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-lg">
          <FaPlus className="w-6 h-6" />
        </button>
      </div> */}
    </div>
  )
}

export default Front;