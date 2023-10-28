import React from "react";
import { USER_ICON } from "../constants/constants";

const CommentComponent = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="flex shadow-lg bg-gray-300 p-2 my-3 rounded-lg">
      <img
        className="w-8 h-8 border border-solid border-black rounded-full m-2 bg-gray-200"
        src={USER_ICON}
        alt="user-icon"
      />
      <div className="m-2">
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default CommentComponent;
