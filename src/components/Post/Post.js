import React from "react";
import "./Post.css";

import Comment from "../Comment/Comment";

function Post({ data }) {
  return (
    <li className="Post">
      <div className="postHeader">
        <img class="avatar" src={data.author.avatar} alt="" />
        <p>
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </p>
      </div>
      <div className="postContent">{data.content}</div>
      <ul>
        {data.comments.map(comment => (
          <Comment key={data.id} comment={comment} />
        ))}
      </ul>
    </li>
  );
}

export default Post;
