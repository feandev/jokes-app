import React from 'react';
import styles from './FormError.module.scss';

function FormError({ formError }) {
  return <div className={formError ? styles.error : styles.hidden}>{formError}</div>;
}

export default FormError;
