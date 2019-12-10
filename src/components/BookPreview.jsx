import React from "react";
import book_img from "./../images/book.png";

const BookPreview = () => {
  return (
    <div className="book-preview">
      <a className="book-inside" href="./">
        <span> Заглянуть внутрь</span>
      </a>
      <div>
        <img src={book_img} alt="book cover"></img>
      </div>
    </div>
  );
};

export default BookPreview;
