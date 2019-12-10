import React from "react";
import styles from "./../Books.module.css";

const BookInfo = () => {
  return (
    <div>
      <p>Автор</p>
      <h1>Название</h1>
      <p>Бумага/электронное издание</p>
      <ul>
        <li>ISBN</li>
        <li>Кол-во страниц</li>
        <li>Дата выпуска</li>
      </ul>
      <div>Описание</div>
    </div>
  );
};

export default BookInfo;
