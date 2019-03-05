import React from 'react';
// import { NavLink } from 'react-router-dom';

import styles from './styles.css';
import content from '../../utils/content';

export default function Navbar() {
  const { title } = content.navbar;
  return (
    <div className={styles.navbar}>
      <h1>{title}</h1>
      <ul className={styles.navList}>
        <li>
          Home
          {/* <NavLink exact activeStyle={{ background: '#ffffff', color: '#ffc814' }} to="/">
            Home
          </NavLink> */}
        </li>
        <li>
          About
          {/* <NavLink activeStyle={{ background: '#ffffff', color: '#ffc814' }} to="/about">
            About
          </NavLink> */}
        </li>
        <li>
          Contact
          {/* <NavLink activeStyle={{ background: '#ffffff', color: '#ffc814' }} to="/contact">
            Contact
          </NavLink> */}
        </li>
      </ul>
    </div>
  );
}
