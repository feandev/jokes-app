import React from "react";
import styles from "./Button.module.scss"

const Button = ({type,  formValid, openFormFunc, description, }) => {

  return (
    <>
      {
        type === 'nav' ? (

          <button onClick={openFormFunc} className={styles.buttonNav} >
            {description}
          </button>
        ) : (
          <button disabled={!formValid} className={styles.button} >
            {description}
          </button>
        )
      }
    </>
  )
}

export default Button;