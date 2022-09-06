import React from 'react'
import { NavLink } from 'react-router-dom';
import AppContext from '../../context';
import Button from '../Button/Button';
import styles from './Navigation.module.scss'
import BurgerMenu from './BurgerMenu/BurgerMenu';

class Navigation extends React.Component {

  state = {
    menuOpen: false
  }

  toggleMobileMenu = () => {this.state.menuOpen ? this.setState({menuOpen: false}) : this.setState({menuOpen: true})}

  closeMobileMenu = () => this.setState({menuOpen: false});

  render() {

    const menuOpen = this.state.menuOpen;
    const closeMobileMenu = this.closeMobileMenu;

    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            <h1 className={styles.title}>&lt;PJ/&gt; <span>programmers jokes</span></h1>
            <nav className={styles.wrapper}>
              <BurgerMenu toggleFunc={this.toggleMobileMenu} active={menuOpen}  />
              <ul className={menuOpen ? styles.navMobile : styles.nav}>
                <li className={styles.navItem} onClick={closeMobileMenu}>
                  <NavLink className={styles.navLink} to="/" >All</NavLink>
                </li>
                <li className={styles.navItem} onClick={closeMobileMenu}>
                  <NavLink className={styles.navLink} to="/polish">Polish</NavLink>
                </li>
                <li className={styles.navItem} onClick={closeMobileMenu}>
                  <NavLink className={styles.navLink} to="/english">English</NavLink>
                </li>
                <li className={styles.navItem} onClick={closeMobileMenu}>
                  <NavLink className={styles.navLink} to="/text">Text</NavLink>
                </li>
                <li className={styles.navItem}onClick={closeMobileMenu}>
                  <NavLink className={styles.navLink} to="/images">Memes</NavLink>
                </li>
                <Button onClick={() => context.openForm()} description="+ Add your joke" type='nav' />
              </ul>
            </nav>
          </>
        )}

      </AppContext.Consumer>
    )
  }
}

export default Navigation;