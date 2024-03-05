import React from "react";
import Comment from "./Comment";

const comments = [
  { name: "우다슬", comment: "안녕하세요 우다슬입니다." },
  { name: "권태영", comment: "안녕하세요 권태영입니다." },
  { name: "김태하", comment: "안녕하세요 김태하입니다." },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
