import React from "react";
import BookInfo from "./BookInfo/BookInfo";
import styles from "./Books.module.css";

const Books = props => {
  debugger;
  let bookElement = props.books.map(el => {
    return (
      <BookInfo
        id={el.id}
        author={el.author}
        title={el.title}
        type={el.type}
        isbn={el.isbn}
        pages={el.pages}
        date={el.date}
        description={el.description}
        cover={el.cover}
      />
    );
  });

  return (
    <div className={styles.bookPage}>
      <div>{bookElement}</div>
    </div>
  );
};

export default Books;
