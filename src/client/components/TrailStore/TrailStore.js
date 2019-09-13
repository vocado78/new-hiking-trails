import React, { Component } from 'react';
import { TrailContext } from './TrailContext';

export default class TrailStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailData: {}
    };
  }

  componentDidMount() {
    const root = window.location.href;

    fetch(`${root}api/trails`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('There was a network failure reading from the db.');
      })
      .then((trailData) => {
        this.setState({
          trailData
        });
      })
      .catch(error => `An error occurred fetching trail data: ${error.message}`);
  }

  render() {
    return (
      <TrailContext.Provider value={this.state.trailData}>
        {/* eslint-disable-next-line react/prop-types */}
        {this.props.children}
      </TrailContext.Provider>
    );
  }
}
