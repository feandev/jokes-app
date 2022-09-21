import React from 'react';
import styles from './Input.module.scss';

function Input({
  HTMLTag: Tag, name, placeholder, ...props
}) {
  return (
    <Tag
      className={Tag === 'input' ? styles.input : styles.textarea}
      type="text"
      name={name}
      placeholder={placeholder}
      required
      {...props}
    />
  );
}

export default Input;
