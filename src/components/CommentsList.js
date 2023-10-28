import React from "react";
import CommentComponent from "./CommentComponent";

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <CommentComponent comment={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  )); //Do not use index as keys
};

export default CommentsList;
