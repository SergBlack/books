import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.link}>
        <NavLink to="/books" activeClassName={styles.avtive}>
          Books
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/audiobooks" activeClassName="active">
          Audiobooks
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./elbooks" activeClassName="active">
          Electronic Books
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./childbooks" activeClassName="active">
          Books for children
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./video" activeClassName="active">
          Video
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="./about" activeClassName="active">
          About us
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
