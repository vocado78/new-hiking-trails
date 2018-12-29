import React from 'react';
import styles from './styles.css';

import RegionSelect from './RegionSelect/RegionSelect';
import RegionMap from './RegionMap/RegionMap';
import BannerText from './BannerText/BannerText';


const Home = () => {
      return (
      <div>
        <div className={styles.banner}>
          <div className={styles.bannerContentContainer}>
            <div className={styles.bannerText}>
              <BannerText />
              <RegionSelect />
            </div>
            <div className={styles.regionMap}>
              <RegionMap />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;