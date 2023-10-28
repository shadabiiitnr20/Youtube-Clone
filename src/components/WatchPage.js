import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [seacrhParams] = useSearchParams();
  //console.log(seacrhParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="mx-4 my-2 p-2 flex ">
        <div>
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + seacrhParams.get("v")}
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
