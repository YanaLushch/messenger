import React from "react";
import Message from "../Message/Message";

const MessageGroup = ({ chat, myMessage }) => {
  return (
    <div className="w-full inline-block">
      {chat && chat.messages && chat.messages.map((message, index) => {
        return (
            <Message
              key={message.id}
              message={message}
              isFirst={index === 0}
              isLast={index === chat.messages.length - 1}
              myMessage={myMessage} // to replace with myUserId
            />
        );
      })}
      {chat && chat.text && <Message key={chat.id} message={chat} myMessage={myMessage} />}
    </div>
  );
};

export default MessageGroup;
