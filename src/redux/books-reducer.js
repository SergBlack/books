const ADD_COMMENT = "ADD-COMMENT";
const UPD_COMMENT_TEXT = "UPD-COMMENT-TEXT";

let initialState = {
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
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let comment = {
        id: 4,
        user: "NewUser",
        comment: state.newCommentText,
        likesCount: 0
      };
      state.bookComments.push(comment);
      state.newCommentText = "";
      return state;
    case UPD_COMMENT_TEXT:
      state.newCommentText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addCommentActionCreator = () => {
  return { type: ADD_COMMENT };
};
export const updCommentTextActionCreator = text => {
  return { type: UPD_COMMENT_TEXT, newText: text };
};
export default booksReducer;
