import React from 'react';
import styles from './FormError.module.scss'

const FormError = ({ formError } ) => (

  <div className={formError ? styles.error : styles.hidden}>{formError}</div>
)

export default FormError;