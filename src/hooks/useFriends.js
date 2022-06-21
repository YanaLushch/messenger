import { useState, useEffect } from "react";
import { profiles as profilesMock } from "../assets/mocks/profiles";

const useFriends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        setFriends(profilesMock);
    }, [friends]);

    const filteredByOnline = friends.filter(profile => profile.online);

    return { friends, setFriends, filteredByOnline };
};

export default useFriends;