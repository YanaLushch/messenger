import Chats from "./MyChats";
import MyChatsProvider from "./../../contexts/MyChatsContext";

const MyChats = () => {
    return (
      <MyChatsProvider>
        <Chats />
      </MyChatsProvider>
    );
  };

export  default  MyChats;