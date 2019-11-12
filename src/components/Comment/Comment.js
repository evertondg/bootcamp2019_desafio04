import React from "react";
import "./Comment.css";

function Comment({ comment }) {
  return (
    <li>
      <img class="avatar" src={comment.author.avatar} alt="" />
      <p>
        <span>{comment.author.name}</span>
        {comment.content}
      </p>
    </li>
  );
}

export default Comment;
