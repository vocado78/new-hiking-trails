import React from 'react';
import { NavLink } from 'react-router-dom';

import content from '../../utils/content';
import styles from './styles.css';

export default function Footer() {
  const { text } = content.footer;
  const active = {
    color: '#fff',
    textDecoration: 'underline'
  };

  return (
    <footer className={styles.footer}>
      <ul className={styles.navList}>
        <li>
          <NavLink exact activeStyle={active} to="/ssr">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={active} to="/ssr/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={active} to="/ssr/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div>{text}</div>
    </footer>
  );
}
