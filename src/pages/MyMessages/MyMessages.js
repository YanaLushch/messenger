import React from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import OnlineStroke from "../../components/OnlineStroke";
import useFriends from "../../hooks/useFriends";
import LastMessageStroke from "../../components/LastMessageStroke";
import Footer from "../../components/Footer";

const MyMessages = () => {
  const { filteredByOnline, sortedByLastMessageTime } = useFriends();

  return (
    <div className="w-11/12 m-auto">
      <Header />
      <SearchInput />
      <OnlineStroke profiles={filteredByOnline} />
      <div>
        {sortedByLastMessageTime.map((profile) => {
          return (
            <LastMessageStroke key={profile.contact_id} profile={profile} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MyMessages;
