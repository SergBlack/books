import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BookPreview from "./components/BookPreview";
import BookInfo from "./components/BookInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header className="header" />
      <Sidebar className="sidebar" />
      <BookPreview className="book-preview" />
      <BookInfo className="book-info" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
