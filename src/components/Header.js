import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import {
  HAMBURGER_ICON,
  YOUTUBE_ICON,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from "../constants/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchSuggestions = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await res.json();
    setSuggestions(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

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
      <div className="col-span-10 px-36 relative">
        <div>
          <input
            className="w-3/4 border border-gray-500 py-1 px-4 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-1 px-3 bg-gray-200 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-0.5 px-5 w-[485px] ml-1 rounded-xl shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((res) => {
                return (
                  <li
                    key={res}
                    className="px-0.5 py-2 shadow-sm m-0.5 text-base font-medium hover:bg-gray-200 rounded-md"
                  >
                    🔍 {res}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
