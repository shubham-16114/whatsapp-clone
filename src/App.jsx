// App.jsx
import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Layout from "./Layout";
import Chats from "./Chats/Chats";
import Calls from "./Calls/Calls";
import Updates from "./Updates/Updates";
import Community from "./communities/community";

function App() {
  const [activeTab, setActiveTab] = useState("Chats");

  const renderContent = () => {
    switch (activeTab) {
      case "Chats":
        return <Chats />;
      case "Calls":
        return <Calls />;
      case "Updates":
        return <Updates />;
      case "Communities":
        return <Community />;
      default:
        return <Chats />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-dvh bg-gray-900">
      <Layout>{renderContent()}</Layout>
      <Navbar setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;