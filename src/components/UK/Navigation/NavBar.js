import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DropDownMenu from './DropDownMenu';
import NavBarLang from './NavBarLang';
import NavBarSeek from './NavBarSeek';

import burger from './images/burger.svg';
import cross from './images/cross.svg';
import logo from './images/logo.svg';
import language from './images/language.svg';
import search from './images/search.svg';

class NavBar extends Component {
  state = {
    showSolutionsDropMenu: false,
    showInsightsDropMenu: false,
    showAboutUsDropMenu: false,
    showNav: 1
  };

  handleSolutionsDropMenuToggle = () => {
    this.setState(prevState => {
      return { showSolutionsDropMenu: !prevState.showSolutionsDropMenu };
    });
  };

  handleSolutionsDropMenuClose = () => {
    this.setState({ showSolutionsDropMenu: false });
  };

  handleInsightsDropMenuToggle = () => {
    this.setState(prevState => {
      return { showInsightsDropMenu: !prevState.showInsightsDropMenu };
    });
  };

  handleInsightsDropMenuClose = () => {
    this.setState({ showInsightsDropMenu: false });
  };

  handleAboutUsDropMenuToggle = () => {
    this.setState(prevState => {
      return { showAboutUsDropMenu: !prevState.showAboutUsDropMenu };
    });
  };

  handleAboutUsDropMenuClose = () => {
    this.setState({ showAboutUsDropMenu: false });
  };

  handleLanguageBtnClick = () => {
    this.setState({ showNav: 2 });
  };

  handleSearchBtnClick = () => {
    this.setState({ showNav: 3 });
  };

  handleCloseBtnClick = () => {
    this.setState({ showNav: 1 });
  };

  render() {
    const { showNav } = this.state;
    return (
      <ToolBar>
        {showNav === 1 && (
          <MainNavigation>
            <MobileMenu>
              <img
                src={this.props.open ? cross : burger}
                alt="mobile navigation menu"
                onClick={this.props.handleMenuToggle}
              />
            </MobileMenu>
            <Logo href="/">
              <img src={logo} className="logo" alt="logo" />
            </Logo>
            <NavigationItems>
              <NavigationItem onMouseLeave={this.handleSolutionsDropMenuClose}>
                <a onClick={this.handleSolutionsDropMenuToggle}>Solutions</a>
                <DropDownMenu show={this.state.showSolutionsDropMenu} />
              </NavigationItem>
              <NavigationItem>
                <NavLink to="/en/home">Cases</NavLink>
                <div />
              </NavigationItem>
              <NavigationItem onMouseLeave={this.handleInsightsDropMenuClose}>
                <a onClick={this.handleInsightsDropMenuToggle}>Insights</a>
                <DropDownMenu show={this.state.showInsightsDropMenu} />
              </NavigationItem>
              <NavigationItem onMouseLeave={this.handleAboutUsDropMenuClose}>
                <a onClick={this.handleAboutUsDropMenuToggle}>About Us</a>
                <DropDownMenu show={this.state.showAboutUsDropMenu} />
              </NavigationItem>
              <NavigationItem>
                <NavLink to="/en/home">Contact</NavLink>
                <div />
              </NavigationItem>
            </NavigationItems>
            <LanguageBtn onClick={this.handleLanguageBtnClick}>
              <img src={language} alt="change language" />
            </LanguageBtn>
            <SearchBtn onClick={this.handleSearchBtnClick}>
              <img src={search} alt="search" />
            </SearchBtn>
          </MainNavigation>
        )}
        {showNav === 2 && <NavBarLang handleCloseBtnClick={this.handleCloseBtnClick} />}
        {showNav === 3 && <NavBarSeek handleCloseBtnClick={this.handleCloseBtnClick} />}
      </ToolBar>
    );
  }
}

export default NavBar;

const ToolBar = styled.header`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px 0px rgba(160, 165, 170, 0.75);
  height: 45px;
  z-index: 5;
  position: fixed;
  width: 100vw;
  top: 0;
  background-color: white;
`;

//Main Navigation Styles
const MainNavigation = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 45px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    height: 45px;
    max-width: 1024px;
  }
`;

const MobileMenu = styled.a`
  display: block;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.a`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-self: center;
  grid-column: 2 / span 2;

  @media screen and (min-width: 768px) {
    grid-column: 1;
    justify-self: center;
    align-self: start;
    padding: 1rem 0;
  }
`;

const NavigationItems = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    grid-column-start: 3;
    grid-column-end: 9;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-row: column;
    align-items: center;
  }
`;

const NavigationItem = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 1rem 0;
    box-sizing: border-box;
    align-self: stretch;
    justify-self: center;
    text-align: center;
    display: block;

    a {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #000;
      text-decoration: none;
    }

    a:hover,
    a:active,
    a:visited {
      border-bottom: 1px solid black;
    }
  }
`;

const LanguageBtn = styled.a`
  @media screen and (max-width: 767px) {
    display: block;
    justify-self: end;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    grid-column: 9 / 10;
    justify-self: end;
    align-self: start;
    padding: 1rem 0;
  }
`;

const SearchBtn = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    grid-column: 10 / 10;
    justify-self: center;
    align-self: start;
    padding: 1rem 0;
  }
`;
