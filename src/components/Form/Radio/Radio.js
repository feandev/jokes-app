import React from "react";
import styles from "./Radio.module.scss"

const Radio = ({ label, changeLangFunc, checked }) => (
  <div>
    <input
      checked={checked}
      type='radio'
      onChange={changeLangFunc}
    >

    </input>
    <label>{label}</label>
  </div>

)

export default Radio;