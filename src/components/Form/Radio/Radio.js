import React from "react";
import styles from "./Radio.module.scss"

const Radio = ({ label, changeLangFunc, checked }) => (

    <label className={styles.label}>
      {label}
      <input
        checked={checked}
        type='radio'
        onChange={changeLangFunc}
        className={styles.input}
      >
      </input>
      <span className={styles.checkbox}></span>
    </label>
)

export default Radio;