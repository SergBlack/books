import React from "react";
import AudioBookCommentElem from "./AudioBookCommentElem";
import AudioBookComments from "./AudioBookComments";
import {
  updCommentAudioBooksPageAC,
  addCommentAudioBooksPageAC
} from "../../../redux/audiobooks-reducer";

const audioBookCommentsContainer = props => {
  let audioBookCommentElem = props.audioBookComments.map((el, index) => {
    return (
      <AudioBookCommentElem
        comment={el.comment}
        user={el.user}
        likesCount={el.likesCount}
      />
    );
  });
  const addComment = () => {
    props.dispatch(addCommentAudioBooksPageAC());
  };

  const updCommentText = text => {
    props.dispatch(updCommentAudioBooksPageAC(text));
  };
  return (
    <div>
      <div>{audioBookCommentElem}</div>
      <AudioBookComments
        addComment={addComment}
        updCommentText={updCommentText}
        newCommentText={props.newCommentText}
      />
    </div>
  );
};

export default audioBookCommentsContainer;
