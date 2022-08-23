import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
      <NavLink to="/" >All

        </NavLink>
        <NavLink to="/polish" >Polish

        </NavLink>
        <NavLink to="/english" >English

        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Navigation;