import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { addComment, updCommentText } from "./redux/store";
import { subscribe } from "./redux/store";

let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
        addComment={addComment}
        updCommentText={updCommentText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerender(store);
subscribe(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
