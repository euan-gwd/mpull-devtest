import React, { Component } from 'react';
import logo from './logo.svg';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <nav id="nav">
          <ul>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Cases</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navigation;
