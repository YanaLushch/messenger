import { useState, useEffect } from "react";
import { friends as profilesMock } from "../assets/mocks/friends";

const useFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(profilesMock);
  }, [friends]);

  const filteredByOnline = friends.filter((profile) => profile.online);
  const sortedByLastMessageTime = friends.sort((a, b) => {
    return new Date(b.lastMessageTime) - new Date(a.lastMessageTime);
  });

  return { friends, setFriends, filteredByOnline, sortedByLastMessageTime };
};

export default useFriends;
