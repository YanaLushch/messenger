import React from "react";
import DayJS from "react-dayjs";

const LastMessageStroke = ({ profile }) => {
  return (
    <div className="flex items-center mt-2 h-16">
      <img
        className="h-10 w-10 mr-3 rounded-full"
        src={profile.avatar}
        alt="Profile"
      />
      <div className="flex flex-col items-start">
        <div className="flex-shrink-0">
          {profile.firstName} {profile.lastName}
        </div>
        <div className="flex flex-row">
          <div className="flex-shrink-0">{profile.lastMessage}</div>
          <DayJS className="pl-4 text-secondary text-xs flex items-center" format="HH:mm">{profile.lastMessageTime}</DayJS>
        </div>
      </div>
      <div className="ml-auto">{(profile.unreadMessages > 0 && "Unread") || "Read"}</div>
    </div>
  );
};

export default LastMessageStroke;
