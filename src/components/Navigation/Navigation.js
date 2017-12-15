import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import burger from '../../assets/burger.svg';
import cross from '../../assets/cross.svg';
import language from '../../assets/language.svg';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <header>
        <a className={`toggle open`} href="#nav">
          <img src={burger} alt="open navigation" />
        </a>
        <a className={`toggle close`} href="#">
          <img src={cross} alt="close navigation" />
        </a>
        <img src={logo} className="logo" alt="logo" />
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
        <a className="" href="#">
          <img src={language} alt="language" />
        </a>
      </header>
    );
  }
}

export default Navigation;
