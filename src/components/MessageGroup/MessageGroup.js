import React from "react";
import Message from "../Message/Message";

const MessageGroup = ({ chat, myMessage }) => {
  return (
    <div className="w-full grid">
      {chat &&
        chat.messages &&
        chat.messages.map((message, index) => {
          return (
            <div>
              <Message
                key={message._id}
                message={message}
                isFirst={index === 0}
                isLast={index === chat.messages.length - 1}
                myMessage={myMessage}
              />
            </div>
          );
        })}
      {chat && chat.text && (
        <Message key={chat._id} message={chat} myMessage={myMessage} />
      )}
    </div>
  );
};

export default MessageGroup;
