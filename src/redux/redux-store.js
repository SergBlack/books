import { createStore, combineReducers } from "redux";
import booksReducer from "./books-reducer";
import audioBooksReducer from "./audiobooks-reducer";

let reducers = combineReducers({
  booksPage: booksReducer,
  audioBooksPage: audioBooksReducer
});

let store = createStore(reducers);

export default store;
