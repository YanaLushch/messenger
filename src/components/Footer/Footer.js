import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUserGroup, faVideo } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="sticky flex items-center justify-around h-20 bottom-0 border-t-2 border-black bg-white">
      <i><FontAwesomeIcon icon={faComment} className="fa-2xl" /></i>
      <FontAwesomeIcon icon={faUserGroup} className="fa-2xl" />
      <FontAwesomeIcon icon={faVideo} className="fa-2xl" />
    </div>
  );
};

export default Footer;
