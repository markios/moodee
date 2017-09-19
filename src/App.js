import React, { Component } from 'react';
import connect from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Ticks } from './modules/ticker';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <div className="App-header">
          <h2>Moodee</h2>
        </div>
        <Ticks />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    menu: state.menu.option,
  }),
  (dispatch) => ({
     changeOption: (name) => dispatch(menu_change(name)),
  })
)(App);