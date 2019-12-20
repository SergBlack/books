import { connect } from "react-redux";
import AudioBooks from "./Audiobooks";

const mapStateToProps = state => {
  return {
    audiobooks: state.audioBooksPage.audiobooks
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const AudioBooksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioBooks);

export default AudioBooksContainer;
