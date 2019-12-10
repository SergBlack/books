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
      <Header />
      <Sidebar />
      <BookPreview />
      <BookInfo />
      <Footer />
    </div>
  );
}

export default App;
