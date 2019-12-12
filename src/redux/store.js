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
      description: "Содержание книги таково - жил был кот",
      comments: ["book id=1 comment 1", "comment 2", "comment 3"]
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
      description: "Содержание книги таково - жил был пес",
      comments: ["book id=2 comment 1", "comment 2", "comment 3"]
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
      description: "Содержание книги таково - жил был крыс",
      comments: ["book id=3 comment 1", "comment 2", "comment 3"]
    }
  ],
  bookComments: [
    {
      id: "1",
      comments: ["book id=1 comment 1", "comment 2", "comment 3"]
    },
    {
      id: "2",
      comments: ["book id=2 comment 1", "comment 2", "comment 3"]
    },
    {
      id: "3",
      comments: ["book id=3 comment 1", "comment 2", "comment 3"]
    }
  ],
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
  ]
};

export default store;
