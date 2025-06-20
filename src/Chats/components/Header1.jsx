import React from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";

function Header1({ searchQuery, setSearchQuery }) {
  return (
    <header className="flex flex-col z-50 shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
        <h1 className="text-lg font-bold">WhatsApp</h1>
        <div className="flex items-center space-x-4">
          <FaSearch className="w-5 h-5" />
          <FaEllipsisV className="w-5 h-5" />
        </div>
      </div>

      <div className="bg-gray-800 px-4 py-2">
        <input
          type="text"
          placeholder="Ask Meta AI or Search"
          className="w-full px-4 py-2 rounded-full bg-gray-700 text-sm text-white placeholder-gray-400 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header1;