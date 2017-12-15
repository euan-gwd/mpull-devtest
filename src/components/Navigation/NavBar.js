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
        <Language>
          <img src={language} alt="language" />
        </Language>
        <Search>
          <img src={search} alt="search" />
        </Search>
      </ToolBar>
    );
  }
}

export default NavBar;

const ToolBar = styled.header`
  margin: 0;
  padding: 0 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 45px;
  width: 100vw;
  /* border-bottom: 1px solid #a0a5aa; */
  z-index: 5;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const MobileMenu = styled.a`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  justify-self: center;
  grid-column: span 2;

  @media screen and (min-width: 768px) {
    grid-column: 1;
    justify-self: end;
  }
`;

const NavMenu = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-self: end;
    grid-column: span 3;
  }
`;

const Language = styled.a`
  @media screen and (max-width: 767px) {
    display: block;
    justify-self: end;
  }

  @media screen and (min-width: 768px) {
    justify-self: end;
    grid-column: 5 / 6;
  }
`;

const Search = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 6 / 6;
  }
`;
