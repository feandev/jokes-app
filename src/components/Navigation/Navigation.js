import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Navigation.module.scss'

const Navigation = ({ openFormFunc }) => (
  <nav className={styles.wrapper}>
    <h1 className={styles.title}>&lt;PJ/&gt; <span>programmers jokes</span></h1>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/" >All jokes</NavLink>
      </li>
     
      <li className={styles.item}>
        <NavLink className={styles.link} to="/polish" >Polish jokes</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/english" >English jokes</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/text" >Text jokes</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/images" >Memes</NavLink>
      </li>
    </ul>
    <Button onClick={openFormFunc} description="Add your joke" />
  </nav>
)

export default Navigation;