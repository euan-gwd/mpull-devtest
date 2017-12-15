import React, { Component } from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';

import logo from '../../assets/logo.svg';
import burger from '../../assets/burger.svg';
// import cross from '../../assets/cross.svg';
import language from '../../assets/language.svg';
import search from '../../assets/search.svg';

class NavBar extends Component {
  render() {
    return (
      <ToolBar>
        <MobileMenu href="/">
          <img src={burger} alt="open navigation" />
        </MobileMenu>
        <img src={logo} className="logo" alt="logo" />
        <NavMenu>
          <NavItems />
        </NavMenu>
        <NavActions>
          <a href="/">
            <img src={language} alt="language" />
          </a>
          <Search href="/">
            <img src={search} alt="search" />
          </Search>
        </NavActions>
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
  z-index: 5;
`;

const NavMenu = styled.nav`
  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const MobileMenu = styled.a`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const NavActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;

  a {
    margin: 0;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

const Search = styled.a`
  @media screen and (max-width: 599px) {
    display: none;
  }
`;
