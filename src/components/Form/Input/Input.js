import React from "react";
import styles from "./Input.module.scss"

const Input = ({HTMLTag: Tag, name, ...props}) => (

  <div>
    <Tag
    type='text'
    name={name}
    required
    {...props}
    />
    <label
      htmlFor={name}>
    </label>
  </div>
)

export default Input;