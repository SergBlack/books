import React from "react";
import Comments from "./Comments";
import {
  addCommentActionCreator,
  updCommentTextActionCreator
} from "./../../../redux/books-reducer.js";
import { connect } from "react-redux";

// const CommentsContainer = props => {
//   let addNewComment = () => {
//     props.dispatch(addCommentActionCreator());
//   };

//   let onChangeCommentText = text => {
//     props.dispatch(updCommentTextActionCreator(text));
//   };

//   return (
//     <div>
//       <Comments
//         bookComments={props.bookComments}
//         newCommentText={props.newCommentText}
//         onChangeCommentText={onChangeCommentText}
//         addNewComment={addNewComment}
//       />
//     </div>
//   );
// };

const mapStateToProps = state => {
  return {
    bookComments: state.booksPage.bookComments,
    newCommentText: state.booksPage.newCommentText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeCommentText: text => {
      dispatch(updCommentTextActionCreator(text));
    },
    addNewComment: () => {
      dispatch(addCommentActionCreator());
    }
  };
};

const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

export default CommentsContainer;
