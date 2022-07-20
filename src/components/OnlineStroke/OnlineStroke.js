import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const OnlineStroke = ({ profiles }) => {
  return (
    <div className="flex items-center mt-2 overflow-x-auto">
      <FontAwesomeIcon icon={faPlus} className="fa-2xl mr-4" />
      {profiles.map((profile) => {
        return (
          <div className="flex flex-col-reverse items-center mr-4 ">
            <div>{profile.firstName}</div>
            <img
              className="h-10 w-10 rounded-full"
              src={profile.avatar}
              alt="avatar"
            />
          </div>
        );
      })}
    </div>
  );
};

export default OnlineStroke;
