import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Books from "./components/Books/Books";
import Audiobooks from "./components/Audiobooks/Audiobooks";
import Elbooks from "./components/Elbooks/Elbooks";
import Childbooks from "./components/Childbooks/Childbooks";
import VideoContent from "./components/VideoContent/VideoContent";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content">
        <Route exact path="/" render={() => <Main />} />
        <Route path="/books" render={() => <Books />} />
        <Route path="/audiobooks" render={() => <Audiobooks />} />
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
