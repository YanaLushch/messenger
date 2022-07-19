import { useState, useEffect } from "react";
import api from './../constants/api';
import axios from "axios";

const useFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${api.baseURL}/`
    })
    .then(response => {setFriends(response.data);})
    .catch(error => console.log(error))
  }, []);

  const filteredByOnline = friends.filter((profile) => profile.online);
  const sortedByLastMessageTime = friends.sort((a, b) => {
    return new Date(b.lastMessageTime) - new Date(a.lastMessageTime);
  });

  return { friends, setFriends, filteredByOnline, sortedByLastMessageTime };
};

export default useFriends;
