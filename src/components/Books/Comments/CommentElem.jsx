import React from "react";
import styles from "./../Books.module.css";

const CommentElem = props => {
  return <div className={styles.comment}>{props.comment}</div>;
};

export default CommentElem;
