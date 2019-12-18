const ADD_COMMENT_AUDIO_BOOKS_PAGE = "ADD-COMMENT-AUDIO-BOOKS-PAGE";
const UPD_COMMENT_TEXT_AUDIO_BOOKS_PAGE = "UPD-COMMENT-TEXT-AUDIO-BOOKS-PAGE";

const audioBooksReducer = (state, action) => {
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
