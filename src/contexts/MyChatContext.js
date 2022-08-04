import { useState, useEffect, createContext } from "react";
import api from "../constants/api";
import axios from "axios";

export const ChatContext = createContext();

const MyChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${api.baseURL}/messages`,
    })
      .then((response) => {
        setMessages(response.data.data.messages);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ChatContext.Provider value={{ messages }}>{children}</ChatContext.Provider>
  );
};
export default MyChatProvider;
