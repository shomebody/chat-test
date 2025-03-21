import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [autoDeploySidebar, setAutoDeploySidebar] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addMessage = (message) => {
    const timestamp = new Date().toLocaleString();
    setMessages([
      ...messages,
      {
        username: 'Garrett',
        timestamp,
        ...message,
        reactions: { thumbsUp: 0, thumbsDown: 0, smile: 0, heart: 0, laugh: 0 },
      },
    ]);
  };

  const updateReaction = (index, reactionType, increment) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, i) =>
        i === index
          ? {
              ...msg,
              reactions: {
                ...msg.reactions,
                [reactionType]: msg.reactions[reactionType] + (increment ? 1 : -1),
              },
            }
          : msg
      )
    );
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <p>Main panel (not used yet).</p>
      </div>
      <ChatInput addMessage={addMessage} />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        autoDeploySidebar={autoDeploySidebar}
        setAutoDeploySidebar={setAutoDeploySidebar}
        messages={messages}
        updateReaction={updateReaction}
      />
    </div>
  );
}

export default App;