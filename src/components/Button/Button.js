import React from 'react';
import styles from './Button.module.scss';

function Button({
  type, formValid, openFormFunc, description,
}) {
  return (
    
        type === 'nav' ? (

          <button onClick={openFormFunc} type="button" className={styles.buttonNav}>
            {description}
          </button>
        ) : (
          <button disabled={!formValid} type="submit" className={styles.button}>
            {description}
          </button>
        )
  );
}

export default Button;


