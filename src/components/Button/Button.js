import React from "react";
import styles from "./Button.module.scss"

const Button = ({description, type, ...props}) => (

  <button className={type === 'nav' ? styles.buttonNav : styles.button} {...props}>
    {description}
  </button>
)

export default Button;