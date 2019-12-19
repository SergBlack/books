import React from "react";

const AudioBookComments = props => {
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
