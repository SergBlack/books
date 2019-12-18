import React from "react";
import Comments from "./Comments";
import CommentElem from "./CommentElem";
import {
  addCommentActionCreator,
  updCommentTextActionCreator
} from "./../../../redux/books-reducer.js";

const CommentsContainer = props => {
  let commentElem = props.bookComments.map((el, index) => {
    return (
      <div>
        <CommentElem
          comment={el.comment}
          user={el.user}
          likesCount={el.likesCount}
        />
      </div>
    );
  });
  let addNewComment = () => {
    props.dispatch(addCommentActionCreator());
  };

  let onChangeCommentText = text => {
    props.dispatch(updCommentTextActionCreator(text));
  };

  return (
    <div>
      <Comments
        bookComments={props.bookComments}
        newCommentText={props.newCommentText}
        onChangeCommentText={onChangeCommentText}
        addNewComment={addNewComment}
        commentElem={commentElem}
      />
    </div>
  );
};

export default CommentsContainer;
