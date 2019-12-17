const ADD_COMMENT = "ADD-COMMENT";
const UPD_COMMENT_TEXT = "UPD-COMMENT-TEXT";

const ADD_COMMENT_AUDIO_BOOKS_PAGE = "ADD-COMMENT-AUDIO-BOOKS-PAGE";
const UPD_COMMENT_TEXT_AUDIO_BOOKS_PAGE = "UPD-COMMENT-TEXT-AUDIO-BOOKS-PAGE";

let store = {
  _state: {
    booksPage: {
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
      newCommentText: "NewText"
    },
    audioBooksPage: {
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
      ],
      newCommentText: "NewTextAudio"
    }
  },
  _rerender() {
    console.log("store is changed");
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_COMMENT:
        let comment = {
          id: 4,
          user: "NewUser",
          comment: this._state.booksPage.newCommentText,
          likesCount: 0
        };
        this._state.booksPage.bookComments.push(comment);
        this._state.booksPage.newCommentText = "";
        this._rerender(this._state);
        return this._state;
      case UPD_COMMENT_TEXT:
        this._state.booksPage.newCommentText = action.newText;
        this._rerender(this._state);
        return this._state;
      case ADD_COMMENT_AUDIO_BOOKS_PAGE:
        let commentAudioBook = {
          id: 4,
          user: "Mojo",
          comment: this._state.audioBooksPage.newCommentText,
          likesCount: 0
        };
        this._state.audioBooksPage.audioBookComments.push(commentAudioBook);
        this._state.audioBooksPage.newCommentText = "";
        this._rerender(this._state);
        return this._state;
      case UPD_COMMENT_TEXT_AUDIO_BOOKS_PAGE:
        this._state.audioBooksPage.newCommentText = action.newTextAudioPage;
        this._rerender(this._state);
        return this._state;
      default:
        return this._state;
    }
  },
  subscribe(observer) {
    this._rerender = observer;
  }
};

export const addCommentActionCreator = () => {
  return { type: ADD_COMMENT };
};
export const updCommentTextActionCreator = text => {
  return { type: UPD_COMMENT_TEXT, newText: text };
};

export const addCommentAudioBooksPageAC = () => {
  return { type: ADD_COMMENT_AUDIO_BOOKS_PAGE };
};

export const updCommentAudioBooksPageAC = text => {
  return { type: UPD_COMMENT_TEXT_AUDIO_BOOKS_PAGE, newTextAudioPage: text };
};

export default store;

window.store = store;
