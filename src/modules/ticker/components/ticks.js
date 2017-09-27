
import React, { Component } from 'react';
import './../style/ticker.css';
import { connect } from 'react-redux';

class Ticks extends Component {
  render() {
    const { currentDayStamp, currentKey } = this.props;
    const count = this.props[currentKey].count.length;
    return (
      <div className="ticker">
        <h2>{currentDayStamp}</h2>
        <button> - </button>
        <span>{count}</span>
        <button> + </button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    ...state.ticks,
  }),
  (dispatch) => ({
     changeOption: (name) => {},
  })
)(Ticks);
