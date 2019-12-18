import React from "react";
import AudioCommentElem from "./AudioCommentElem";
import {
  updCommentAudioBooksPageAC,
  addCommentAudioBooksPageAC
} from "./../../../redux/audiobooks-reducer";

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
  let textRef = React.createRef();
  const addComment = () => {
    props.dispatch(addCommentAudioBooksPageAC());
  };

  const updCommentText = () => {
    let text = textRef.current.value;
    props.dispatch(updCommentAudioBooksPageAC(text));
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

export default AudioComments;
