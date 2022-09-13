import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from './List.module.scss';
import Footer from "../../views/Footer/Footer";

const List = ({ items }) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      {items.map(joke => (
        <ListItem key={Math.random().toString(36).substr(2, 9)} type={joke.type} {...joke} />
      ))}
    </ul>
    <Footer />
  </div>
)

export default List;