const ADD_COMMENT = "ADD-COMMENT";
const UPD_COMMENT_TEXT = "UPD-COMMENT-TEXT";

const booksReducer = (state, action) => {
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
