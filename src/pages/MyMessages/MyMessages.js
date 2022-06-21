import React from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import OnlineStroke from "../../components/OnlineStroke";
import useFriends from "../../hooks/useFriends";

const MyMessages = () => {
  const { filteredByOnline } = useFriends();

  return (
    <div className="w-11/12 m-auto">
      <Header />
      <SearchInput />
      <OnlineStroke profiles={filteredByOnline} />
    </div>
  );
};

export default MyMessages;
