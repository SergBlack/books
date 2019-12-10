import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.a}>
        <NavLink to="/books">Books</NavLink>
      </div>
      <div className={styles.a}>
        <NavLink to="/audiobooks">Audiobooks</NavLink>
      </div>
      <div className={styles.a}>
        <NavLink to="./elbooks">Electronic Books</NavLink>
      </div>
      <div className={styles.a}>
        <NavLink to="./childbooks">Books for children</NavLink>
      </div>
      <div className={styles.a}>
        <NavLink to="./presents">Presents</NavLink>
      </div>
      <div className={styles.a}>
        <NavLink to="./about">About us</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
