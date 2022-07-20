import React, { useContext } from "react";
import ChatFooter from "../../components/ChatFooter/ChatFooter";
import ChatHeader from "./../../components/ChatHeader";
import useMyProfile from "./../../hooks/useMyProfile";
import { ChatContext } from "./../../contexts/MyChatContext";
import MessageGroup from "../../components/MessageGroup/MessageGroup";

const MyChat = () => {
  const { myProfile } = useMyProfile();
  const { messages } = useContext(ChatContext);

  return (
    <div className="w-11/12 m-auto">
      <ChatHeader myProfile={myProfile} />
      <div>
        {messages &&
          messages.map((chat) => {
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
