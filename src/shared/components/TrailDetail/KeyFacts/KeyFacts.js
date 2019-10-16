import React from 'react';
import { keyFactsType } from '../../../utils/types';

import styles from './styles.css';

export default function KeyFacts({
  trail: {
    connect,
    distance,
    duration,
    finish,
    level,
    province,
    stageDistances,
    stages,
    start,
    comfort
  }
}) {
  const keyFacts = [
    {
      title: 'Province',
      data: province
    },
    {
      title: 'Start',
      data: start
    },
    {
      title: 'Finish',
      data: finish
    },
    {
      title: 'Total distance',
      data: distance
    },
    {
      title: 'Time needed',
      data: duration.map(option => `${option} `)
    },
    {
      title: 'Level of difficulty',
      data: level
    },
    {
      title: 'Comfort',
      data: comfort.map(option => `${option} `)
    },
    {
      title: 'Major connecting trails',
      data: connect
    },
    {
      title: 'Stage distances',
      data: stageDistances
    },
    {
      title: 'Number of stages',
      data: stages
    }
  ];

  const facts = keyFacts.map((fact) => {
    return (
      <li key={fact.title}>
        <span>{fact.title}</span>
        <br />
        {fact.data}
      </li>
    );
  });

  return (
    <div className={styles.keyFacts}>
      <h3>Key Facts</h3>
      <ul>{facts}</ul>
    </div>
  );
}

KeyFacts.propTypes = keyFactsType.isRequired;
