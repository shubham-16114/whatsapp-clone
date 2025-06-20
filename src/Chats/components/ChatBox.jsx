import React from 'react'

const ChatBox = ({ index, name, lastMessage  = 'Last message preview...'
}) => 
   (
   <div
          key={index}
          className="flex items-center px-4 py-3 space-x-4 hover:bg-gray-800"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-gray-900 font-bold">
            {name[0]}
          </div>
          <div className="flex-1">
            <h2 className="text-sm font-semibold">{name}</h2>
            <p className="text-xs text-gray-400">{lastMessage}</p>
          </div>
          <span className="text-xs text-gray-400">1:31 PM</span>
        </div>
  )


export default ChatBox