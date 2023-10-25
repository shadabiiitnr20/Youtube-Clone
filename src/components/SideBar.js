import React, { useState } from "react";
import { SIDE_BAR_CONTENT } from "../constants/constants";
import { useSelector } from "react-redux";

const SideBar = () => {
  const [openSubContent, setOpenSubContent] = useState(null);

  const toggleContent = (id) => {
    if (openSubContent === id) {
      return setOpenSubContent(null);
    }
    setOpenSubContent(id);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  // if (!isMenuOpen) return null;

  return (
    <div className={`${isMenuOpen ? "block" : "hidden"} p-2 h-[535px] duration-300`}>
      {SIDE_BAR_CONTENT.map((content) => {
        return (
          <div key={content.id} onClick={() => toggleContent(content.id)}>
            <div className="flex">
              <img
                className="h-8 mx-1 my-2 cursor-pointer"
                src={content.logo}
                alt="logo"
              />
              <h5 className="mx-1 my-3 text-md font-semibold cursor-pointer">
                {content.name}
              </h5>
            </div>
            {content.haveSubContent && (
              <>
                {content.subContent.map((subContent) => {
                  return (
                    <div
                      key={subContent.id}
                      // className={`${
                      //   openSubContent === content.id ? "block" : "hidden"
                      // }`}
                    >
                      <div className="flex pl-7">
                        <img
                          className="h-5 mx-1 my-1.5 cursor-pointer"
                          src={subContent.logo}
                          alt="logo"
                        />
                        <h5 className="mx-1 my-0.5 text-md cursor-pointer">
                          {subContent.name}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
