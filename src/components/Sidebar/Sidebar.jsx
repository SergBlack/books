import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.link}>
        <NavLink to="/books" className={styles.a}>
          Books
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/audiobooks" className={styles.a}>
          Audiobooks
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./elbooks" className={styles.a}>
          Electronic Books
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./childbooks" className={styles.a}>
          Books for children
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./video" className={styles.a}>
          Video
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./about" className={styles.a}>
          About us
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
