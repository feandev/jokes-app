import React from "react";
import styles from "./Button.module.scss"

const Button = ({description, ...props}) => (

  <button className={styles.button} {...props}>
    {description}
  </button>
)

export default Button;