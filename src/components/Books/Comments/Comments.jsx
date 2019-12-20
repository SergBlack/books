import React from "react";
import { NavLink } from "react-router-dom";
import CommentElem from "./CommentElem";

const Comments = props => {
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
  let newCommentElement = React.createRef();

  let addNewComment = () => {
    props.addNewComment();
  };
  let onChangeCommentText = () => {
    let text = newCommentElement.current.value;
    props.onChangeCommentText(text);
  };

  return (
    <div>
      <div>{commentElem}</div>
      <h3>Comments</h3>
      <div>{props.commentElem}</div>
      <textarea
        onChange={onChangeCommentText}
        ref={newCommentElement}
        value={props.newCommentText}
      ></textarea>
      <div>
        <button onClick={addNewComment}>Add comment</button>
      </div>
      <div>
        <NavLink to="/books">Back</NavLink>
      </div>
    </div>
  );
};

export default Comments;
