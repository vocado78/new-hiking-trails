import React from 'react';
import { listItemDataType } from '../../../../utils/types';

import styles from './styles.css';
import content from '../../../../utils/content';

export default function ListItem({ data }) {
  // eslint-disable-next-line
  const { name, distance, title } = data;
  const { results: { listItem: { bullet1 } } } = content;
  return (
    <div className={styles.listItem}>
      <span>♣</span>
      <h3>{name}</h3>
      <p>
        {bullet1}
        {' '}
        {distance}
      </p>
      <p>{title}</p>
    </div>
  );
}

ListItem.propTypes = {
  data: listItemDataType.isRequired
};
