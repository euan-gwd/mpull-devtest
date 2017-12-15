import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import burger from '../../assets/burger.svg';
// import cross from '../../assets/cross.svg';
import language from '../../assets/language.svg';
// import styled from 'styled-components';
import NavItem from './NavItem';

class NavBar extends Component {
  render() {
    return (
      <header>
        <button>
          <img src={burger} alt="open navigation" />
        </button>
        <img src={logo} className="logo" alt="logo" />
        <nav id="nav">
          <NavItem />
        </nav>
        <button>
          <img src={language} alt="language" />
        </button>
      </header>
    );
  }
}

export default NavBar;
