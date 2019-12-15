import { rerender } from "./../render";

let store = {
  books: [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
      cover: "https://files.books.ru/pic/3001-4000/3626/3626.jpg",
      author: "Автор Крыс",
      title: "Название Жизнь крыса",
      type: "Бумага. Печать офсетная",
      isbn: "ISBN number 3",
      pages: "700 страниц",
      date: "Дата выпуска 1600г",
      description: "Содержание книги таково - жил был крыс"
    }
  ],
  bookComments: [
    {
      id: 1,
      user: "Jack",
      comment: "I like it",
      likesCount: 0
    },
    {
      id: 2,
      user: "Black",
      comment: "Its something strange",
      likesCount: 4
    },
    {
      id: 3,
      user: "Bill",
      comment: "Kek, lol xD",
      likesCount: 7
    }
  ],
  newCommentText: "Text",
  audiobooks: [
    {
      cover:
        "https://audio-knigi.net/wp-content/uploads/2019/12/kaplyatvye.jpg",
      author: "Лоуренс",
      title: "Капля твердой материи",
      type: "Аудиозапись",
      isbn: "",
      pages: "45 минут",
      date: "Дата выпуска 2000г",
      description: "Аудиоспектакль"
    },
    {
      cover:
        "https://audio-knigi.net/wp-content/uploads/2019/12/kaplyatvye.jpg",
      author: "Лоуренс",
      title: "Капля твердой материи",
      type: "Аудиозапись",
      isbn: "",
      pages: "45 минут",
      date: "Дата выпуска 2000г",
      description: "Аудиоспектакль"
    },
    {
      cover:
        "https://audio-knigi.net/wp-content/uploads/2019/12/kaplyatvye.jpg",
      author: "Лоуренс",
      title: "Капля твердой материи",
      type: "Аудиозапись",
      isbn: "",
      pages: "45 минут",
      date: "Дата выпуска 2000г",
      description: "Аудиоспектакль"
    }
  ],
  audioBookComments: [
    {
      id: 1,
      user: "Lili",
      comment: "Gingeltail",
      likesCount: 0
    },
    {
      id: 2,
      user: "Korbeen",
      comment: "He is rich",
      likesCount: 4
    },
    {
      id: 3,
      user: "Dallas",
      comment: "WoW!",
      likesCount: 7
    }
  ]
};

export const addComment = () => {
  let comment = {
    id: 4,
    user: "NewUser",
    comment: store.newCommentText,
    likesCount: 0
  };
  store.bookComments.push(comment);
  store.newCommentText = "";
  rerender(store);
};

export const updCommentText = text => {
  store.newCommentText = text;
  rerender(store);
};

export const observer = () => {};

export default store;

// window.store = store;
