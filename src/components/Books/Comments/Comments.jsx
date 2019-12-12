import React from "react";
import { NavLink } from "react-router-dom";
import CommentElem from "./CommentElem";

const Comments = props => {
  let commentElem = props.bookComments.map(el => {
    return <CommentElem comment={el.comments} />;
  });
  return (
    <div>
      <h3>Комментарии</h3>
      {commentElem}
      <textarea placeholder="Text"></textarea>
      <div>
        <button>Add comment</button>
      </div>
      <div>
        <NavLink to="/books">Обратно</NavLink>
      </div>
    </div>
  );
};

export default Comments;
