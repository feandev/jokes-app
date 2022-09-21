import React from 'react';
import styles from './Radio.module.scss';

function Radio({ label, changeLangFunc, checked }) {
  return (
    <label className={styles.label}>
      {label}
      <input
        checked={checked}
        type="radio"
        onChange={changeLangFunc}
        className={styles.input}
      />
      <span className={styles.checkbox} />
    </label>
  );
}

export default Radio;
