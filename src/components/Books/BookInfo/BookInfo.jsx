import React from "react";
import styles from "./../Books.module.css";
import { NavLink } from "react-router-dom";

const BookInfo = props => {
  return (
    <div className={styles.bookInfo}>
      <div>
        <a className="book-inside" href="./">
          <span>Look inside</span>
        </a>
        <p>
          <img src={props.cover} alt="book cover"></img>
        </p>
      </div>
      <div>
        <p>{props.author}</p>
        <h1>{props.title}</h1>
        <p>{props.type}</p>
        <ul>
          <li>{props.isbn}</li>
          <li>{props.pages}</li>
          <li>{props.date}</li>
        </ul>
        <p>{props.description}</p>
        <NavLink to="/comments">Comments</NavLink>
      </div>
    </div>
  );
};

export default BookInfo;
