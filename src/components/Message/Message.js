import React from "react";
import classNames from "classnames";

const Message = ({ message, isFirst, isLast, myMessage }) => {
  const msgClass = classNames({
    'rounded-bl-none': isFirst && !myMessage,
    "rounded-tl-none": isLast && !myMessage,
    "bg-secondary": !myMessage,
    "bg-gray-300 float-right": myMessage,
    "rounded-br-none": isFirst && myMessage,
    "rounded-tr-none": isLast && myMessage,
  });

  return (
    <div className={`w-fit px-5 py-1 my-1 rounded-2xl ${msgClass}`}>
      {message.text}
    </div>
  );
};

export default Message;
