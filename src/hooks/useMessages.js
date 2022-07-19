import { useState, useEffect } from "react";
import api from './../constants/api';
import axios from "axios";

const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${api.baseURL}/chat`

    })
    .then(response => {setMessages(response.data);})
    .catch(error => console.log(error))
  }, []);

  return { messages, setMessages };
};

export default useMessages;
