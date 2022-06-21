import React from "react";

const OnlineStroke = ({ profiles }) => {
  console.log(profiles);
  return profiles.map((profile) => {
    return (
      <div className="w-full flex justify-center">
        <div>{profile.name}</div>
        <img
          className="h-10 w-10 mr-3 rounded-full"
          src={profile.avatar}
          alt="avatar"
        />
      </div>
    );
  });
};

export default OnlineStroke;
