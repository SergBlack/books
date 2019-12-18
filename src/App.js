import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Books from "./components/Books/Books";
import AudioBooks from "./components/Audiobooks/Audiobooks";
import Elbooks from "./components/Elbooks/Elbooks";
import Childbooks from "./components/Childbooks/Childbooks";
import VideoContent from "./components/VideoContent/VideoContent";
import About from "./components/About/About";
import CommentsContainer from "./components/Books/Comments/CommentsContainer";
import AudioComments from "./components/Audiobooks/AudioComments/AudioComments";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content">
        <Route exact path="/" render={() => <Main />} />
        <Route
          path="/books"
          render={() => <Books books={props.state.booksPage.books} />}
        />
        <Route
          path="/comments"
          render={() => (
            <CommentsContainer
              bookComments={props.state.booksPage.bookComments}
              newCommentText={props.state.booksPage.newCommentText}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/audiobooks"
          render={() => (
            <AudioBooks audiobooks={props.state.audioBooksPage.audiobooks} />
          )}
        />
        <Route
          path="/audioComments"
          render={() => (
            <AudioComments
              audioBookComments={props.state.audioBooksPage.audioBookComments}
              newCommentText={props.state.audioBooksPage.newCommentText}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/elbooks" render={() => <Elbooks />} />
        <Route path="/childbooks" render={() => <Childbooks />} />
        <Route path="/video" render={() => <VideoContent />} />
        <Route path="/about" render={() => <About />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
