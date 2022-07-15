import { useState, useEffect, useMemo } from "react";
import { messages as mock } from "../assets/mocks/messages";

const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(mock);
    console.log("here")
  }, []);

  //TODO: to move this code to the backend
  const groupedMessages = useMemo(() => {
    const grouping = messages.reduce((acc, message) => {
      const { userId } = message;
      const lastMessage = acc[acc.length - 1];
      if (lastMessage && lastMessage.userId === userId) {
        if (lastMessage.type !== "group") {
          acc[acc.length - 1] = {
            id: lastMessage.id,
            chatId: lastMessage.chatId,
            userId: lastMessage.userId,
            type: 'group',
            messages: [lastMessage, message]
          }
        } else if (lastMessage.type === "group") {
          const newMessages = [...acc[acc.length - 1].messages, message];
          acc[acc.length - 1].messages = newMessages;
        }
      } else {
        acc.push({ ...message, type: "single" });
      }
      return acc;
    }, []);
    console.log(grouping);
    return grouping;
  }, [messages]);

  return { messages, setMessages, groupedMessages };
};

export default useMessages;
