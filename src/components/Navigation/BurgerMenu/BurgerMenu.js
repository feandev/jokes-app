import React from 'react';
import styles from './BurgerMenu.module.scss'

const BurgerMenu = ({ toggleFunc, active }) => (

  <div onClick={toggleFunc}  className={styles.wrapper}>
      <div className={active? styles.burgerMenuActive : styles.burgerMenu}></div>
  </div>
    
)

export default BurgerMenu;