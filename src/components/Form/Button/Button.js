import React from "react";
import styles from "./Button.module.scss"

const Button = ({description}) => (

  <button className={styles.button}>
    {description}
  </button>
)

export default Button;