import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_ICON,
  YOUTUBE_ICON,
  USER_ICON,
} from "../constants/constants";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-7 cursor-pointer"
          alt="menu"
          src={HAMBURGER_ICON}
        />
        <a href="/">
          <img className="h-7 mx-4" alt="logo" src={YOUTUBE_ICON} />
        </a>
      </div>
      <div className="col-span-10 px-36">
        <input
          className="w-3/4 border border-gray-500 py-1 px-4 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 py-1 px-3 bg-gray-200 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-7 border border-solid border-black rounded-full bg-gray-200"
          alt="user"
          src={USER_ICON}
        />
      </div>
    </div>
  );
};

export default Header;
