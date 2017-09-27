import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Ticks } from './modules/ticker';
import { actions } from './modules/menu';

class App extends Component {
  render() {
    const { menu } = this.props;
    return (  
      <div className="App">
        <div className="App-header">
          <h2>Moodee</h2>
        </div>
        <Ticks />
        <div>{menu}</div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    menu: state.menu.target,
  }),
  (dispatch) => ({
     changeOption: (name) => dispatch(actions.menu_change(name)),
  })
)(App);