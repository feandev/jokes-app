import React from "react";
import styles from './Footer.module.scss'

const Footer = () => {

  const scrollUp = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

  return (

    <footer className={styles.wrapper}>
      <a href="https://github.com/feandev" target="_blank" rel="noreferrer" className={styles.github}>github</a>
      <button onClick={() => scrollUp()} className={styles.btn} id="scrollBtn"></button>
    </footer>
  )
}

export default Footer;