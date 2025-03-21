import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const ChatMessages = ({ messages, updateReaction }) => {
  const handleReaction = (index, reactionType) => {
    const currentCount = messages[index].reactions[reactionType];
    const increment = currentCount === 0;
    updateReaction(index, reactionType, increment);
  };

  return (
    <div className="message-area">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <div className="message-header">
            <span className="username">{msg.username}</span>
            <span className="punctuation">: </span>
            {msg.type === 'text' ? (
              <span className="content">{msg.content}</span>
            ) : (
              <img src={msg.content} alt="Uploaded" className="chat-image" />
            )}
          </div>
          <div className="message-footer">
            <div className="timestamp">
              <span className="punctuation">(</span>
              <span className="date-time">{msg.timestamp}</span>
              <span className="punctuation">)</span>
            </div>
            <div className="reaction-bar">
              <button
                className="reaction-button"
                onClick={() => handleReaction(index, 'thumbsUp')}
                title="Thumbs Up"
              >
                👍 {msg.reactions.thumbsUp > 0 ? msg.reactions.thumbsUp : ''}
              </button>
              <button
                className="reaction-button"
                onClick={() => handleReaction(index, 'thumbsDown')}
                title="Thumbs Down"
              >
                👎 {msg.reactions.thumbsDown > 0 ? msg.reactions.thumbsDown : ''}
              </button>
              <button
                className="reaction-button"
                onClick={() => handleReaction(index, 'smile')}
                title="Smile"
              >
                😊 {msg.reactions.smile > 0 ? msg.reactions.smile : ''}
              </button>
              <button
                className="reaction-button"
                onClick={() => handleReaction(index, 'heart')}
                title="Heart"
              >
                ❤️ {msg.reactions.heart > 0 ? msg.reactions.heart : ''}
              </button>
              <button
                className="reaction-button"
                onClick={() => handleReaction(index, 'laugh')}
                title="Laugh"
              >
                😂 {msg.reactions.laugh > 0 ? msg.reactions.laugh : ''}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;