import React from 'react';
import styles from './BurgerMenu.module.scss';

function BurgerMenu({ toggleFunc, active }) {
  return (
    <div onClick={toggleFunc} className={styles.wrapper} role="button" tabIndex="0">
      <div className={active ? styles.burgerMenuActive : styles.burgerMenu} />
    </div>
  );
}

export default BurgerMenu;
