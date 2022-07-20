import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import profile from "./../../assets/images/unknown_profile.jpg";

const Header = () => {
  return (
    <div className="sticky flex space-x-20 h-14 justify-between items-center top-0 bg-white">
      <div className="flex">
        <img className="h-10 w-10 mr-3 rounded-full" src={profile} alt="Profile" />
        <h1 className="leading-9 text-3xl font-bold">Chats</h1>
      </div>
      <div className="flex">
        <div className="mr-3 cursor-pointer">
          <FontAwesomeIcon icon={faCamera} className="fa-2xl" />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faPenToSquare} className="fa-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
