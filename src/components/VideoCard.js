import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 p-2 w-48 rounded-lg shadow-lg">
      <img
        className="rounded-lg w-full"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold pt-1 pb-0.5">{title}</li>
        <li className="font-medium underline">Channel Name: {channelTitle}</li>
        <li className="font-medium">▶ {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
