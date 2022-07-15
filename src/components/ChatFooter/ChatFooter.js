import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faImage,
  faMicrophone,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const ChatFooter = () => {
  return (
    <div className="sticky flex items-center justify-around h-12 bottom-0 border-t-2 border-black bg-white">
      <FontAwesomeIcon icon={faCamera} className="fa-xl pointer" />
      <FontAwesomeIcon icon={faImage} className="fa-xl pointer" />
      <FontAwesomeIcon icon={faMicrophone} className="fa-xl pointer" />
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-sm w-full max-w-xs"
      />
      <FontAwesomeIcon
        icon={faThumbsUp}
        className="fa-xl pointer text-secondary"
      />
    </div>
  );
};

export default ChatFooter;
