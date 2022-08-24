import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" >All</NavLink>
        <NavLink to="/polish" >Polish</NavLink>
        <NavLink to="/english" >English</NavLink>
        <NavLink to="/text" >Text</NavLink>
        <NavLink to="/images" >Images</NavLink>
      </li>
    </ul>
  </nav>
)

export default Navigation;