import React, { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ChatMessages from './ChatMessages';

const Sidebar = ({
  isOpen,
  toggleSidebar,
  autoDeploySidebar,
  setAutoDeploySidebar,
  messages,
  updateReaction,
}) => {
  useEffect(() => {
    if (autoDeploySidebar && messages.length > 0 && !isOpen) {
      toggleSidebar();
    }
  }, [messages, autoDeploySidebar, isOpen, toggleSidebar]);

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h5>Chat</h5>
          <button
            onClick={toggleSidebar}
            className="toggle-button"
            aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>
        <div className="sidebar-content">
          <div className="auto-deploy-toggle">
            <label>
              <input
                type="checkbox"
                checked={autoDeploySidebar}
                onChange={() => setAutoDeploySidebar(!autoDeploySidebar)}
              />
              Auto-deploy sidebar on new messages
            </label>
          </div>
          <ChatMessages messages={messages} updateReaction={updateReaction} />
        </div>
      </div>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle-button"
          aria-label="Open sidebar"
        >
          <FaChevronLeft />
        </button>
      )}
    </>
  );
};

export default Sidebar;