import React from "react";
import AudioBookComments from "./AudioBookComments";
import {
  updCommentAudioBooksPageAC,
  addCommentAudioBooksPageAC
} from "../../../redux/audiobooks-reducer";
import { connect } from "react-redux";

// const audioBookCommentsContainer = props => {
//   const addComment = () => {
//     props.dispatch(addCommentAudioBooksPageAC());
//   };

//   const updCommentText = text => {
//     props.dispatch(updCommentAudioBooksPageAC(text));
//   };
//   return (
//     <div>
//       <AudioBookComments
//         addComment={addComment}
//         updCommentText={updCommentText}
//         newCommentText={props.newCommentText}
//         audioBookComments={props.audioBookComments}
//       />
//     </div>
//   );
// };

const mapStateToProps = state => {
  return {
    newCommentText: state.audioBooksPage.newCommentText,
    audioBookComments: state.audioBooksPage.audioBookComments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: () => {
      dispatch(addCommentAudioBooksPageAC());
    },
    updCommentText: text => {
      dispatch(updCommentAudioBooksPageAC(text));
    }
  };
};

const audioBookCommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioBookComments);

export default audioBookCommentsContainer;
