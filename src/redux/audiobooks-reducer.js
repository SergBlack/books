const ADD_COMMENT_AUDIO_BOOKS_PAGE = "ADD-COMMENT-AUDIO-BOOKS-PAGE";
const UPD_COMMENT_TEXT_AUDIO_BOOKS_PAGE = "UPD-COMMENT-TEXT-AUDIO-BOOKS-PAGE";

let initialState = {
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
};

const audioBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_AUDIO_BOOKS_PAGE:
      let commentAudioBook = {
        id: 4,
        user: "Mojo",
        comment: state.newCommentText,
        likesCount: 0
      };
      state.audioBookComments.push(commentAudioBook);
      state.newCommentText = "";
      return state;
    case UPD_COMMENT_TEXT_AUDIO_BOOKS_PAGE:
      state.newCommentText = action.newTextAudioPage;
      return state;
    default:
      return state;
  }
};

export const addCommentAudioBooksPageAC = () => {
  return { type: ADD_COMMENT_AUDIO_BOOKS_PAGE };
};

export const updCommentAudioBooksPageAC = text => {
  return { type: UPD_COMMENT_TEXT_AUDIO_BOOKS_PAGE, newTextAudioPage: text };
};

export default audioBooksReducer;
