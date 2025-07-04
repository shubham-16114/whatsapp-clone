import React, { useState } from "react";
import ChatBox from "./ChatBox";
import MessageArea from "./MessageArea";
import initialMessages from "./ChatData";

function ChatList({ searchQuery = "" }) {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedChat, setSelectedChat] = useState(null);

  const chatList = Object.keys(messages).map((name) => {
    const data = messages[name];
    const lastMessage =
      data.messages.length > 0
        ? data.messages[data.messages.length - 1].text
        : "Last message preview...";
    return { name, time: data.time || "", lastMessage };
  });

  const handleSendMessage = (chatName, text) => {
    setMessages((prev) => ({
      ...prev,
      [chatName]: {
        ...prev[chatName],
        messages: [...prev[chatName].messages, { from: "me", text }],
      },
    }));
  };

  const filteredChats = chatList.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex">
      <div
        className={`w-full md:w-1/3 border-r border-gray-800 overflow-y-auto ${
          selectedChat ? "hidden md:block" : "block"
        }`}
      >
        {filteredChats.map((chat, i) => (
          <div key={i} onClick={() => setSelectedChat(chat.name)}>
            <ChatBox {...chat} />
          </div>
        ))}
      </div>

      <div
        className={`w-full md:w-2/3 ${
          selectedChat ? "block" : "hidden md:block"
        }`}
      >
        {selectedChat ? (
          <MessageArea
            chatName={selectedChat}
            messages={messages[selectedChat].messages}
            onSendMessage={(msg) => handleSendMessage(selectedChat, msg)}
            onBack={() => setSelectedChat(null)}
          />
        ) : (
          <div className="p-6 text-gray-400">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatList;