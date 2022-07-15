import React from "react";
import ChatFooter from "../../components/ChatFooter/ChatFooter";
import ChatHeader from "./../../components/ChatHeader";
import useMyProfile from "./../../hooks/useMyProfile";
import useMessages from "./../../hooks/useMessages";
import MessageGroup from "../../components/MessageGroup/MessageGroup";

const MyChat = () => {
  const { myProfile } = useMyProfile();
  const { groupedMessages } = useMessages();

  console.log(groupedMessages);

  return (
    <div className="w-11/12 m-auto">
      <ChatHeader myProfile={myProfile} />
      <div>
        {groupedMessages &&
          groupedMessages.map((chat, index) => {
            return (
              <MessageGroup
                key={chat.id}
                chat={chat}
                myMessage={chat.userId === "user123"}
              />
            );
          })}
      </div>
      <ChatFooter />
    </div>
  );
};

export default MyChat;
