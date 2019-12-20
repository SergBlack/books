import AudioBookComments from "./AudioBookComments";
import {
  updCommentAudioBooksPageAC,
  addCommentAudioBooksPageAC
} from "../../../redux/audiobooks-reducer";
import { connect } from "react-redux";

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
