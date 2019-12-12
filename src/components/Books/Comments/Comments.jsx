import React from "react";
import { NavLink } from "react-router-dom";
import CommentElem from "./CommentElem";

const Comments = props => {
  let commentElem = props.bookComments.map((el, index) => {
    // if (el.id === props.books.index.id) {
    return <CommentElem comment={el.comments} />;
    // }
  });
  return (
    <div>
      <h3>Comments</h3>
      <div>{commentElem}</div>
      <textarea placeholder="Text"></textarea>
      <div>
        <button>Add comment</button>
      </div>
      <div>
        <NavLink to="/books">Back</NavLink>
      </div>
    </div>
  );
};

export default Comments;
