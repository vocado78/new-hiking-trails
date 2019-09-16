import React from 'react';

import styles from './styles.css';
import RegionSelect from './RegionSelect/RegionSelect';
import RegionMap from './RegionMap/RegionMap';
import BannerText from './BannerText/BannerText';
import Welcome from './Welcome/Welcome';


export default function Home() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.bannerContentContainer}>
          <div className={styles.bannerText}>
            <BannerText />
            <RegionSelect />
          </div>
          <RegionMap />
        </div>
      </div>
      <Welcome />
    </div>
  );
}
