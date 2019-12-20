import React from "react";
import AudioBookCommentElem from "./AudioBookCommentElem";

const AudioBookComments = props => {
  let audioBookCommentElem = props.audioBookComments.map((el, index) => {
    return (
      <AudioBookCommentElem
        comment={el.comment}
        user={el.user}
        likesCount={el.likesCount}
      />
    );
  });
  let textRef = React.createRef();
  const addComment = () => {
    props.addComment();
  };

  const updCommentText = () => {
    let text = textRef.current.value;
    props.updCommentText(text);
  };

  return (
    <div>
      <div>{audioBookCommentElem}</div>
      <textarea
        onChange={updCommentText}
        ref={textRef}
        value={props.newCommentText}
      ></textarea>
      <div>
        <button onClick={addComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default AudioBookComments;
