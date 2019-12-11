import React from "react";
import styles from "./../AudioBooks.module.css";

const AudioBookInfo = props => {
  return (
    <div className={styles.audioBookInfo}>
      <div>
        <p>
          <img src={props.cover} alt="audiobook cover"></img>
          <audio src="" type="audio/mpeg" controls></audio>
        </p>
      </div>
      <div>
        <p>{props.author}</p>
        <h1>{props.title}</h1>
        <p>{props.type}</p>
        <ul>
          <li>{props.pages}</li>
          <li>{props.date}</li>
        </ul>

        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default AudioBookInfo;
