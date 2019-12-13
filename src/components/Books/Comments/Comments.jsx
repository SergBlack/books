import React from "react";
import { NavLink } from "react-router-dom";
import CommentElem from "./CommentElem";
import { updCommentText } from "../../../redux/store";

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
    props.addComment();
    props.updCommentText("");
  };
  let onChangeCommentText = () => {
    let text = newCommentElement.current.value;
    props.updCommentText(text);
  };

  return (
    <div>
      <h3>Comments</h3>
      <div>{commentElem}</div>
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
