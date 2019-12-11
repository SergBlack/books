import React from "react";
import BookInfo from "./BookInfo/BookInfo";
import styles from "./Books.module.css";

const Books = props => {
  let booksElement = props.books.map(el => {
    return (
      <BookInfo
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
      <div>{booksElement}</div>
    </div>
  );
};

export default Books;
