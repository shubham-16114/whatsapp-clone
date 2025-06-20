import React from "react";
import { FaCommentAlt, FaUsers, FaPhoneAlt, FaBell } from "react-icons/fa";

function Navbar({ setActiveTab }) {
  return (
    <div className="flex justify-between px-6 py-3 bg-gray-800 text-white">
      <button
        className="flex flex-col items-center text-sm"
        onClick={() => setActiveTab("Chats")}
      >
        <FaCommentAlt className="w-5 h-5" />
        <p className="mt-1">Chats</p>
      </button>

      <button
        className="flex flex-col items-center text-sm"
        onClick={() => setActiveTab("Updates")}
      >
        <FaBell className="w-5 h-5" />
        <p className="mt-1">Updates</p>
      </button>

      <button
        className="flex flex-col items-center text-sm"
        onClick={() => setActiveTab("Communities")}
      >
        <FaUsers className="w-5 h-5" />
        <p className="mt-1">Communities</p>
      </button>

      <button
        className="flex flex-col items-center text-sm"
        onClick={() => setActiveTab("Calls")}
      >
        <FaPhoneAlt className="w-5 h-5" />
        <p className="mt-1">Calls</p>
      </button>
    </div>
  );
}

export default Navbar;