import React from "react";
import { BTN_LIST_CATEGORIES } from "../constants/constants";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`${isMenuOpen ? "ml-12" : "mx-24"}`}>
      {BTN_LIST_CATEGORIES.map((category) => {
        return (
          <button
            className="bg-gray-200 m-1 py-1 px-3 text-center text-base font-medium rounded-lg hover:bg-gray-300"
            key={category.id}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
