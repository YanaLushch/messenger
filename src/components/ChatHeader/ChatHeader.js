import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faVideo, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { Wrapper } from "./MyMessages.styles";

const ChatHeader = ({ myProfile }) => {
  return (
    <div className="sticky flex space-x-20 h-14 justify-between items-center top-0 bg-white">
      <div className="flex">
        <FontAwesomeIcon icon={faChevronLeft} className="fa-2xl text-secondary pr-4 cursor-pointer" />
        <img
          className="h-10 w-10 mr-3 rounded-full"
          src={myProfile.avatar}
          alt="Profile"
        />
        <div className="flex flex-col items-start">
          <h1 className="text-sm font-bold">
            {myProfile.firstName} {myProfile.lastName}
          </h1>
          <div className="text-xs text-gray-500">Messenger</div>
        </div>
      </div>
      <div className="flex">
        <div className="mr-3 cursor-pointer">
          <FontAwesomeIcon icon={faPhone} className="fa-xl text-secondary" />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faVideo} className="fa-xl text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
