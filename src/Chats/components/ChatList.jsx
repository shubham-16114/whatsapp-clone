import React from "react";
import ChatBox from "./ChatBox";

function ChatList({ searchQuery }) {
  const chatList = [
    { name: "Abhinav", lastMessage: "Hey, how are you?" },
    { name: "Harsh School Friend" },
    { name: "DAC Admins" },
    { name: "Vinayak" },
    { name: "The Amazing Fan" },
    { name: "Noctis" },
    { name: "WhatsApp" },
    { name: "Thabris (Shinchan Nohara)" },
    { name: "Nazim" },
  ];

  const filteredChats = chatList.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto">
      {filteredChats.map((props, index) => (
        <ChatBox {...props} key={index} index={index} />
      ))}
    </div>
  );
}

export default ChatList;