import React from "react";

const AudioCommentElem = props => {
  return (
    <div>
      <b>{props.user}</b>
      <p>{props.comment}</p>
      <div>Нравится: {props.likesCount}</div>
    </div>
  );
};

export default AudioCommentElem;
