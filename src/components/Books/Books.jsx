import React from "react";
import BookInfo from "./BookInfo/BookInfo";
import styles from "./Books.module.css";

let booksData = {
  books: [
    {
      cover: "https://files.books.ru/pic/562001-563000/562047/562047.jpg",
      author: "Автор Кот",
      title: "Название Жизнь кота",
      type: "Бумага. Печать офсетная",
      isbn: "ISBN number 1",
      pages: "500 страниц",
      date: "Дата выпуска 1900г",
      description: "Содержание книги таково - жил был кот"
    },
    {
      cover:
        "https://files.books.ru/pic/3613001-3614000/3613171/520151814ct.jpg",
      author: "Автор Пес",
      title: "Название Жизнь пса",
      type: "Бумага. Печать офсетная",
      isbn: "ISBN number 2",
      pages: "600 страниц",
      date: "Дата выпуска 1800г",
      description: "Содержание книги таково - жил был пес"
    },
    {
      cover: "https://files.books.ru/pic/3001-4000/3626/3626.jpg",
      author: "Автор Крыс",
      title: "Название Жизнь крыса",
      type: "Бумага. Печать офсетная",
      isbn: "ISBN number 3",
      pages: "700 страниц",
      date: "Дата выпуска 1600г",
      description: "Содержание книги таково - жил был крыс"
    }
  ]
};

const Books = () => {
  let booksElement = booksData.books.map(el => {
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
