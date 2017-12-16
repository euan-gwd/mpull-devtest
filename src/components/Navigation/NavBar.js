import React, { Component } from 'react';
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
    showNavOption: 1
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
    this.setState({ showNavOption: 2 });
  };

  handleSearchBtnClick = () => {
    this.setState({ showNavOption: 3 });
  };

  handleCloseBtnClick = () => {
    this.setState({ showNavOption: 1 });
  };

  render() {
    const { showNavOption } = this.state;
    return (
      <ToolBar>
        {showNavOption === 1 && (
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
            <NavigationItem onMouseLeave={this.handleSolutionsDropMenuClose}>
              <a onClick={this.handleSolutionsDropMenuToggle}>Solutions</a>
              <DropDownMenu show={this.state.showSolutionsDropMenu} />
            </NavigationItem>
            <NavigationItem>
              <a href="/">Cases</a>
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
              <a href="/">Contact</a>
              <div />
            </NavigationItem>
            <LanguageBtn onClick={this.handleLanguageBtnClick}>
              <img src={language} alt="change language" />
            </LanguageBtn>
            <SearchBtn onClick={this.handleSearchBtnClick}>
              <img src={search} alt="search" />
            </SearchBtn>
          </MainNavigation>
        )}
        {showNavOption === 2 && <NavBarLang handleCloseBtnClick={this.handleCloseBtnClick} />}
        {showNavOption === 3 && <NavBarSeek handleCloseBtnClick={this.handleCloseBtnClick} />}
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
    grid-template-columns: repeat(8, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
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

const NavigationItem = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;

    a {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      grid-row: 1;
      color: #000;
      text-decoration: none;
      text-align: center;
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
    justify-self: end;
    grid-column: 7 / 8;
    cursor: pointer;
  }
`;

const SearchBtn = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 8 / 8;
    cursor: pointer;
  }
`;
