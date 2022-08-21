import React from "react";
import styles from "./Input.module.scss"

const Input = ({name}) => (

  <div>
    <input
    type='text'
    name={name}
    >

    </input>
    <label>
      add joke {name} 
    </label>
  </div>


)

export default Input;