import React, { Component } from 'react';
import styled from 'styled-components';
import DesktopNavItems from './DesktopNavItems';
import SolutionsDropDownMenu from './DropDowns/SolutionsDropDownMenu';
import InsightsDropDownMenu from './DropDowns/InsightsDropDownMenu';
import AboutUsDropDownMenu from './DropDowns/AboutUsDropDownMenu';

import burger from './assets/burger.svg';
import cross from './assets/cross.svg';

import logo from './assets/logo.svg';

import language from './assets/language.svg';
import search from './assets/search.svg';

class NavBar extends Component {
  state = {
    showSolutionsDropMenu: false,
    showInsightsDropMenu: false,
    showAboutUsDropMenu: false
  };

  handleSolutionsDropMenuToggle = () => {
    this.setState(prevState => {
      return { showSolutionsDropMenu: !prevState.showSolutionsDropMenu };
    });
  };

  handleInsightsDropMenuToggle = () => {
    this.setState(prevState => {
      return { showInsightsDropMenu: !prevState.showInsightsDropMenu };
    });
  };

  handleAboutUsDropMenuToggle = () => {
    this.setState(prevState => {
      return { showAboutUsDropMenu: !prevState.showAboutUsDropMenu };
    });
  };

  render() {
    return (
      <ToolBar>
        <MobileMenu>
          <img
            src={this.props.open ? cross : burger}
            alt="mobile navigation menu"
            onClick={this.props.handleMenuToggle}
          />
        </MobileMenu>
        <Logo src={logo} className="logo" alt="logo" />
        <NavMenu>
          <DesktopNavItems
            handleSolutionsDropMenuToggle={this.handleSolutionsDropMenuToggle}
            handleInsightsDropMenuToggle={this.handleInsightsDropMenuToggle}
            handleAboutUsDropMenuToggle={this.handleAboutUsDropMenuToggle}
          />
          <SolutionsDropDownMenu show={this.state.showSolutionsDropMenu} />
          <InsightsDropDownMenu show={this.state.showInsightsDropMenu} />
          <AboutUsDropDownMenu show={this.state.showAboutUsDropMenu} />
        </NavMenu>
        <Language>
          <img src={language} alt="change language" />
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
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 45px;
  max-width: 1024px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
    align-items: start;
    padding: 1rem 0;
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
    justify-self: start;
  }
`;

const NavMenu = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    grid-column: 2 / span 4;
    display: block;
  }
`;

const Language = styled.a`
  @media screen and (max-width: 767px) {
    display: block;
    justify-self: end;
  }

  @media screen and (min-width: 768px) {
    justify-self: end;
    grid-column: 6 / 7;
  }
`;

const Search = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 7 / 7;
  }
`;
