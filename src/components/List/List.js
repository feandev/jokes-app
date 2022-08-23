import React from "react";
import ListItem from "./ListItem";


const List = ({ items }) => (
  <>
    <ul>
      {items.map(joke => (
        <ListItem key={joke.name} {...joke} />
      ))}
    </ul>
  </>
)

export default List;