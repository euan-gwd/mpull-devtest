import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import burger from '../../assets/burger.svg';
// import cross from '../../assets/cross.svg';
import language from '../../assets/language.svg';
import styled from 'styled-components';
import NavItems from './NavItems';

class NavBar extends Component {
  render() {
    return (
      <ToolBar>
        <a href="/">
          <img src={burger} alt="open navigation" />
        </a>
        <img src={logo} className="logo" alt="logo" />
        <nav id="nav">
          <NavItems />
        </nav>
        <a href="/">
          <img src={language} alt="language" />
        </a>
      </ToolBar>
    );
  }
}

export default NavBar;

const ToolBar = styled.header`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;
  width: 100vw;
  border-bottom: 1px solid #a0a5aa;
`;
