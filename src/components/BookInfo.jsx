import React from "react";

const BookInfo = () => {
  return (
    <div className="book-info">
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
