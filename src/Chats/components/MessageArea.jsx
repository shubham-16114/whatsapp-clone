import React, { useState, useRef, useEffect } from "react";

function MessageArea({ chatName, messages, onSendMessage, onBack }) {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-gray-950 text-white">
      <div className="flex items-center p-3 bg-gray-900 border-b border-gray-700">
        <button onClick={onBack} className="mr-4 text-lg font-bold md:hidden">
          ←
        </button>
        <h2 className="font-semibold text-lg">{chatName}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
              msg.from === "me" ? "bg-green-600 ml-auto" : "bg-gray-700 mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex p-3 border-t border-gray-700 bg-gray-900">
        <input
          className="flex-1 p-2 rounded bg-gray-800 text-white outline-none"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-green-600 text-white rounded md:hidden"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageArea;