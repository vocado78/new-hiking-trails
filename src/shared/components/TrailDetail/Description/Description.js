import React from 'react';
import { descriptionType } from '../../../../shared/utils/types';

import styles from './styles.css';

export default function Description({
  access,
  complete,
  description,
  landscape,
  moreInfo
}) {
  return (
    <div className={styles.description}>
      <h3>Description</h3>
      <p>{description}</p>
      <p>{`Landscape: ${landscape}`}</p>
      <p>{`Access the trail from: ${access}`}</p>
      <p>{complete}</p>
      <p>
        For more information, please visit the
        <a href={moreInfo}> trail website</a>
        .
      </p>
    </div>
  );
}

Description.propTypes = descriptionType.isRequired;
