import React from "react";
import { FaCommentAlt, FaUsers, FaPhoneAlt, FaBell } from "react-icons/fa";

function Navbar({ setActiveTab }) {
  return (
    <div className="flex justify-between px-6 py-3 theme-bg theme-text">
      <button
        className="flex flex-col items-center text-sm  px-3 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
        onClick={() => setActiveTab("Chats")}
      >
        <FaCommentAlt className="w-5 h-5" />
        <p className="mt-1">Chats</p>
      </button>

      <button
        className="flex flex-col items-center text-sm px-3 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
        onClick={() => setActiveTab("Updates")}
      >
        <FaBell className="w-5 h-5" />
        <p className="mt-1">Updates</p>
      </button>

      <button
        className="flex flex-col items-center text-sm px-3 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
        onClick={() => setActiveTab("Communities")}
      >
        <FaUsers className="w-5 h-5" />
        <p className="mt-1">Communities</p>
      </button>

      <button
        className="flex flex-col items-center text-sm px-3 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
        onClick={() => setActiveTab("Calls")}
      >
        <FaPhoneAlt className="w-5 h-5" />
        <p className="mt-1">Calls</p>
      </button>
    </div>
  );
}

export default Navbar;