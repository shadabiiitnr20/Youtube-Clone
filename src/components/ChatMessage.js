import React from "react";
import { USER_ICON } from "../constants/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-md rounded-lg">
      <img
        className="h-7 border border-solid border-black rounded-full bg-gray-200"
        alt="user"
        src={USER_ICON}
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
