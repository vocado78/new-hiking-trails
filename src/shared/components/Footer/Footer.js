import React from 'react';
import { NavLink } from 'react-router-dom';

import content from '../../utils/content';
import styles from './styles.css';
import config from '../../../../config';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];


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
          <NavLink exact activeStyle={active} to={homePath}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={active} to={`${homePath}/about`}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={active} to={`${homePath}/contact`}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div>{text}</div>
    </footer>
  );
}
