import React from "react";
import styles from "./../AudioBooks.module.css";

const AudioCommentElem = props => {
  return (
    <div className={styles.comment}>
      <b className={styles.userName}>{props.user}</b>
      <p>{props.comment}</p>
      <div className={styles.likesCount}>Нравится: {props.likesCount}</div>
    </div>
  );
};

export default AudioCommentElem;
