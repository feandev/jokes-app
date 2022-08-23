import React from "react";


const ListItem = ({name, content, lang}) => (

  <>
    <li>
      <h2>{name}</h2>
      <p>{content}</p>
      <p>{lang}</p>
      </li>
  </>
)

export default ListItem;