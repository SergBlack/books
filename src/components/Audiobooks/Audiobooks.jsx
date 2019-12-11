import React from "react";
import AudioBookInfo from "./AudioBookInfo/AudioBookInfo";

const AudioBooks = props => {
  let audioBookElem = props.audiobooks.map(el => {
    return (
      <AudioBookInfo
        cover={el.cover}
        author={el.author}
        title={el.title}
        type={el.type}
        pages={el.pages}
        date={el.date}
        description={el.description}
      />
    );
  });
  return <div>{audioBookElem}</div>;
};

export default AudioBooks;
