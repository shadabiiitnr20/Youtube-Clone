import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constants/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ContainerVideo = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videos, setVideos] = useState([]);

  const getYoutubeVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEO_API);
    const data = await res.json();
    setVideos(data.items);
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  return (
    <div className={`${isMenuOpen ? "ml-10" : "ml-[90px]"} flex flex-wrap`}>
      <AdVideoCard info={videos[0]} />
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default ContainerVideo;
