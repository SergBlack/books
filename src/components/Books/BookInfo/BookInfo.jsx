import React from "react";
import styles from "./../Books.module.css";

const BookInfo = props => {
  return (
    <div className={styles.bookInfo}>
      <div>
        <a className="book-inside" href="./">
          <span> Заглянуть внутрь</span>
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
      </div>
    </div>
  );
};

export default BookInfo;
