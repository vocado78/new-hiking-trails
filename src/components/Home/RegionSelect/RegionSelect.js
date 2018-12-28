import React from 'react';
// import { Link } from 'react-router-dom';

import styles from './styles.css';

export default class RegionSelect extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      region: ""
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({region: event.target.value});
    console.log(event.target.value);
  }

  render() {
    return (
      <form className={styles.form}>
        {/* <label>Show me trails in</label> */}
        <select className={styles.select}
            value={this.state.region}
            onChange={this.handleSelect}>
            <option value=''>Please select region</option>
            <option value='northern-norrland'>Northern Norrland</option>
            <option value='southern-norrland'>Southern Norrland</option>
            <option value='svealand'>Svealand</option>
            <option value='northern-gotaland'>Northern Götaland</option>
            <option value='southern-gotaland'>Southern Götaland</option>
            <option value='all'>Show all</option>
        </select>
        <a className={styles.button} href={'/'}>Go</a>
        {/* <Link className={styles.button}
          to={{
            pathname: "/results",
            search: "?region=" + this.state.region
          }}>Go</Link> */}

      </form>
    );
  }
}