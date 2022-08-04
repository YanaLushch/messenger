import { useState, useEffect, createContext } from "react";
import api from '../constants/api';
import axios from "axios";

export const MyChatsContext = createContext();

const MyChatsProvider = ({children}) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${api.baseURL}/friends`
    })
    .then(response => {setFriends(response.data);})
    .catch(error => console.log(error))
  }, []);

  const filteredByOnline = friends.filter((profile) => profile.online);
  const sortedByLastMessageTime = friends.sort((a, b) => {
    return new Date(b.lastMessageTime) - new Date(a.lastMessageTime);
  });

  return (
    <MyChatsContext.Provider value={{ friends, filteredByOnline, sortedByLastMessageTime }}>
        {children}
    </MyChatsContext.Provider>
  );
};

export default MyChatsProvider;