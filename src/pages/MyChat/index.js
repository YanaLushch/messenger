import Chat from "./MyChat";
import MyChatProvider from "./../../contexts/MyChatContext";

const MyChat = () => {
    return (
      <MyChatProvider>
        <Chat />
      </MyChatProvider>
    );
  };

export  default  MyChat;