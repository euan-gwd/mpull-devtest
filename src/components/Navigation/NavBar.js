import React, { Component } from 'react';
import styled from 'styled-components';
import DesktopNavItems from './DesktopNavItems';

import logo from '../../assets/logo.svg';
import burger from '../../assets/burger.svg';
// import cross from '../../assets/cross.svg';
import language from '../../assets/language.svg';
import search from '../../assets/search.svg';

class NavBar extends Component {
  render() {
    return (
      <ToolBar>
        <MobileMenu>
          <img src={burger} alt="open navigation" />
        </MobileMenu>
        <Logo src={logo} className="logo" alt="logo" />
        <NavMenu>
          <DesktopNavItems />
        </NavMenu>
        <NavActions>
          <a>
            <img src={language} alt="language" />
          </a>
          <Search>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 45px;
  width: 100vw;
  border-bottom: 1px solid #a0a5aa;
  z-index: 5;
`;

const MobileMenu = styled.a`
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  justify-self: center;
  grid-column: span 2;

  @media screen and (min-width: 768px) {
    grid-column: 1;
  }
`;

const NavMenu = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: span 2;
  }
`;

const NavActions = styled.div`
  grid-column: 4/4;
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
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
