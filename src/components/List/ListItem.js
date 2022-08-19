import React from "react";


const ListItem = ({name, content}) => (

  <>
    <li>
      <h2>{name}</h2>
      <p>{content}</p>
      </li>
  </>
)

export default ListItem;