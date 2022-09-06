import React from "react";
import styles from "./Input.module.scss"

const Input = ({HTMLTag: Tag, name, placeholder, ...props}) => (

    <Tag
    className={Tag === 'input' ? styles.input : styles.textarea}
    type='text'
    name={name}
    placeholder={placeholder}
    required
    {...props}
    />
)

export default Input;