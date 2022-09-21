import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  const scrollUp = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <footer className={styles.wrapper}>
      <a
        href="https://github.com/feandev/programmers-jokes"
        target="_blank"
        rel="noreferrer"
        className={styles.github}
      >
        github
      </a>
      <button onClick={() => scrollUp()} type="button" aria-label='scrollUp' className={styles.btn} id="scrollBtn" />
    </footer>
  );
}

export default Footer;
