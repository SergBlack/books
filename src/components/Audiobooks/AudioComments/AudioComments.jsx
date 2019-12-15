import React from "react";
import AudioCommentElem from "./AudioCommentElem";

const AudioComments = props => {
  let audioBookCommentElem = props.audioBookComments.map((el, index) => {
    return (
      <AudioCommentElem
        comment={el.comment}
        user={el.user}
        likesCount={el.likesCount}
      />
    );
  });

  return <div>{audioBookCommentElem}</div>;
};

export default AudioComments;
