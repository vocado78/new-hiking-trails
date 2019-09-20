import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.css';
import content from '../../utils/content';

export default function Navbar() {
  const { title } = content.navbar;
  return (
    <div className={styles.navbar}>
      <h1>{title}</h1>
      <ul className={styles.navList}>
        <li>
          <NavLink exact activeStyle={{ color: '#b30039' }} to="/ssr">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: '#b30039' }} to="/ssr/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: '#b30039' }} to="/ssr/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
