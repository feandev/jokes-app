import React from "react";
import ListItem from "./ListItem";


const List = ({ items }) => (
  <>
    <ul>
      {items.map(joke => (
        <ListItem key={Math.random().toString(36).substr(2, 9)} type={joke.type} {...joke} />
      ))}
    </ul>
  </>
)

export default List;