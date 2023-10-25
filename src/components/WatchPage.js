import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [seacrhParams] = useSearchParams();
  console.log(seacrhParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="mx-4 my-2 p-2">
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + seacrhParams.get("v")}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default WatchPage;
