import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import BooksContainer from "./components/Books/BooksContainer";
import AudioBooksContainer from "./components/Audiobooks/AudioBooksContainer";
import Elbooks from "./components/Elbooks/Elbooks";
import Childbooks from "./components/Childbooks/Childbooks";
import VideoContent from "./components/VideoContent/VideoContent";
import About from "./components/About/About";
import CommentsContainer from "./components/Books/Comments/CommentsContainer";
import AudioBookCommentsContainer from "./components/Audiobooks/AudioComments/AudioBookCommentsContainer";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content">
        <Route exact path="/" render={() => <Main />} />
        <Route path="/books" render={() => <BooksContainer />} />
        <Route path="/comments" render={() => <CommentsContainer />} />
        <Route path="/audiobooks" render={() => <AudioBooksContainer />} />
        <Route
          path="/audioBookComments"
          render={() => <AudioBookCommentsContainer />}
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
