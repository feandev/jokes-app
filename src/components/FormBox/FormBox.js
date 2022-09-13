import React from "react";
import Form from "../Form/Form";
import styles from "./FormBox.module.scss"

const FormBox = () => (

  <div className={styles.background}>
    <div className={styles.box}>
      <Form />
    </div>
  </div>
)

export default FormBox;