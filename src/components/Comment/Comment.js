import React from 'react';
import './Comment.css';

function Comment({ comments }) {
  console.log(comments);
  return <strong className="comment">Comentário {comments.author.name}</strong>;
}

export default Comment;
