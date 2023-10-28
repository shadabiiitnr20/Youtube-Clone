import React from "react";
import CommentsList from "./CommentsList";
import { COMMENTS_DATA } from "../constants/constants";

const CommentsContainer = () => {
  return (
    <div className="mx-4 p-1 w-[800px]">
      <h1 className="text-2xl font-bold">Comments</h1>
      {/* {COMMENTS_DATA.map((comment, index) => {
        return <CommentComponent key={index} data={comment} />; //Should not use index as key
      })} */}
      <CommentsList comments={COMMENTS_DATA} />
    </div>
  );
};

export default CommentsContainer;
