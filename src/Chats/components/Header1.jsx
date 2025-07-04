import React from "react";
import { FaQrcode, FaEllipsisV } from "react-icons/fa";
import CameraButton from "./Camera"; 
import ThemeToggle from "../../togggle";

function Header1({ searchQuery, setSearchQuery }) {
  return (
    <header className="flex flex-col z-50 shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 bg-primary">
        <h1 className="text-lg font-bold">WhatsApp</h1>
        <div className="flex items-center space-x-4 ">
          <FaQrcode className="w-7 h-6" />
          <CameraButton className="w-7 h-6" />
          <FaEllipsisV className="w-7 h-6" />
          <ThemeToggle className="w-7 h-6"/>
        </div>
      </div>

      <div className="bg-gray-800 px-4 py-2 theme-bg theme-text">
        <input
          type="text"
          placeholder="Ask Meta AI or Search"
          className="w-full px-4 py-2 rounded-full theme-bgg text-sm theme-text placeholder-gray-400 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header1;