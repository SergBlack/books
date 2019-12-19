import React from "react";
import styles from "./../AudioBooks.module.css";

const AudioBookCommentElem = props => {
  return (
    <div className={styles.comment}>
      <b className={styles.userName}>{props.user}</b>
      <p>{props.comment}</p>
      <div className={styles.likesCount}>Нравится: {props.likesCount}</div>
    </div>
  );
};

export default AudioBookCommentElem;
