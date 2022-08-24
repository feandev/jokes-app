import React from "react";

const ListItem = ({ content, type }) => {

  return (

    <li>
      {
        type === 'text' ? (

          <p>{content}</p>
        ) : (

          <img alt="img" src={content}></img>
        )
      }
    </li>
  )
}

export default ListItem;