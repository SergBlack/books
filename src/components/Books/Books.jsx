import React from "react";
import BookInfo from "./BookData/BookInfo";
import BookPreview from "./BookData/BookPreview";
import styles from "./Books.module.css";

const Books = () => {
  return (
    <div>
      <div className={styles.bookPreview}>
        <BookPreview />
      </div>
      <div className={styles.bookInfo}>
        <BookInfo />
      </div>
    </div>
  );
};

export default Books;
