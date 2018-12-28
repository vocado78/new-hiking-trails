import React from 'react';
import styles from './styles.css';

import RegionSelect from './RegionSelect/RegionSelect';
import RegionMap from './RegionMap/RegionMap';

const Presentation = () => {
  const header = "LOOKING FOR A HIKING TRAIL IN SWEDEN?";
  const intro =
     "Look no more. Simply get started by selecting the region you are " +
     " interested in to find the perfect hike for you.";
  const paraOne =
  "Sweden offers an extensive number of hiking trails in a diverse landscape " +
  "ranging from beautiful coasts to deep, quiet forests to remote mountains " +
  "to open, wide-spread pastures.";
  const paraTwo =
  "Walk in the wilderness but seldom far from civilisation. Many sections of " +
  "most hiking trails are serviced by public transport which makes it easy " +
  "to tailor a hike according to your specific preferences. It also " +
  "facilitates combining a hiking trip with a city holiday.";
  const tip = "Move the pointer over the map to highlight the " +
  "different regions.";

  return (
    <div>
    <h1 style={{
          marginBottom:"1em",
          color:"#ffffff",
          letterSpacing:"0.05em"}}>{header}</h1>
    <p style={{fontWeight: "bold", color:"#ffffff"}}>{intro}</p>
    {/* <p>{paraOne}</p>
    <p>{paraTwo}</p>
    <p style={{
      fontSize:"0.78em",
      textAlign:"right",
      marginTop:"4em"}}>{tip}</p> */}
    </div>
  );
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.banner}>
          <div className={styles.container}>
            <div className={styles.presentation}>
              <Presentation />
              <RegionSelect />
            </div>
            <div className={styles.region}>
              <RegionMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}