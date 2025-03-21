import React, { useState } from 'react';
import { FaPaperclip, FaArrowUp, FaImage } from 'react-icons/fa';

const ChatInput = ({ addMessage }) => {
  const [input, setInput] = useState('');

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage({ type: 'text', content: input });
      setInput('');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        addMessage({ type: 'image', content: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="chat-input-container">
      <div className="chat-input-wrapper">
        <textarea
          placeholder="Type your message..."
          className="chat-textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleTextSubmit(e);
            }
          }}
        />
        <div className="chat-input-icons">
          <label htmlFor="image-upload" className="image-upload-label">
            <FaImage className="icon" />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <FaPaperclip className="icon" />
          <button className="send-button" onClick={handleTextSubmit}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;