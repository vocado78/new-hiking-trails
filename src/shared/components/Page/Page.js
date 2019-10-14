import React from 'react';

import { pageType } from '../../utils/types';
import styles from './styles.css';
import PageTitle from '../PageTitle/PageTitle';


export default function Page(props) {
  return (
    <div className={styles.page}>
      <PageTitle title={props.title} page={props.page} />
      <div>{props.children}</div>
    </div>
  );
}

Page.propTypes = pageType;
