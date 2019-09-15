import React, { Component } from 'react';

import { TrailContext } from './TrailContext';
import fetchTrails from '../../shared/api';

export default class TrailStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailData: {}
    };
  }

  componentDidMount() {
    fetchTrails()
      .then((trailData) => {
        this.setState({
          trailData
        });
      });
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
