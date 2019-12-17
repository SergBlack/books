import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.link}>
        <NavLink to="/books" activeClassName="selected">
          Books
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/audiobooks" activeClassName="selected">
          Audiobooks
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./elbooks" activeClassName="selected">
          Electronic Books
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./childbooks" activeClassName="selected">
          Books for children
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./video" activeClassName="selected">
          Video
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./about" activeClassName="selected">
          About us
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
