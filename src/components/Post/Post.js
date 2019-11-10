import React from 'react';
import './Post.css';

import Comment from '../Comment/Comment';

function Post({ data }) {
  return (
    <li className="Post">
      <p>
        <img src={data.author.avatar} width="50" alt="" />
        <strong>{data.author.name}</strong>
        <span>{data.date}</span>
      </p>
      <p>{data.content}</p>
      {data.comments.map(comment => (
        <Comment key={data.id} comments={data.comments[0]} />
      ))}
    </li>
  );
}

export default Post;
