import React from "react";
import ListItem from "./ListItem";
import styles from './List.module.scss';


const List = ({ items }) => (
  <>
    <ul className={styles.list}>
      {items.map(joke => (
        <ListItem key={Math.random().toString(36).substr(2, 9)} type={joke.type} {...joke} />
      ))}
    </ul>
  </>
)

export default List;