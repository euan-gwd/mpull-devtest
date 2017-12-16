import React, { Component } from 'react';
import styled from 'styled-components';
import DropDownMenu from './DropDownMenu';

import burger from './images/burger.svg';
import cross from './images/cross.svg';
import logo from './images/logo.svg';
import language from './images/language.svg';
import search from './images/search.svg';

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

  render() {
    return (
      <ToolBar>
        <MainNavigation>
          <MobileMenu>
            <img
              src={this.props.open ? cross : burger}
              alt="mobile navigation menu"
              onClick={this.props.handleMenuToggle}
            />
          </MobileMenu>
          <Logo src={logo} className="logo" alt="logo" />
          <NavigationItem onMouseLeave={this.handleSolutionsDropMenuClose}>
            <a onClick={this.handleSolutionsDropMenuToggle}>Solutions</a>
            <DropDownMenu show={this.state.showSolutionsDropMenu} />
          </NavigationItem>
          <NavigationItem>
            <a>Cases</a>
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
          </NavigationItem>
          <LanguageBtn>
            <img src={language} alt="change language" />
          </LanguageBtn>
          <SearchBtn>
            <img src={search} alt="search" />
          </SearchBtn>
        </MainNavigation>
        <NavigationLanguage>
          <NavLangLogo src={logo} className="logo" alt="logo" />
          <LanguageIcon>
            <img src={language} alt="change language" />
          </LanguageIcon>
          <NavigationItem>
            <a>UK</a>
          </NavigationItem>
          <NavigationItem>
            <a>DK</a>
          </NavigationItem>
          <NavigationItem>
            <a>NO</a>
          </NavigationItem>
          <NavigationItem>
            <a>SE</a>
          </NavigationItem>
          <CloseNavBtn>
            <img src={cross} alt="Back to Main Navigation" />
          </CloseNavBtn>
        </NavigationLanguage>
        <NavigationSearch>
          <Logo src={logo} className="logo" alt="logo" />
          <SearchIcon>
            <img src={search} alt="Search Bar" />
          </SearchIcon>
          <SearchBar>
            <input type="search" placeholder="Type to search..." id="" />
          </SearchBar>
          <CloseNavBtn>
            <img src={cross} alt="Back to Main Navigation" />
          </CloseNavBtn>
        </NavigationSearch>
      </ToolBar>
    );
  }
}

export default NavBar;

const ToolBar = styled.header`
  box-shadow: 0px 1px 2px 0px rgba(160, 165, 170, 0.75);
`;

const MainNavigation = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 45px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 1fr;
    align-items: start;
    padding: 1rem 0;
    max-width: 1024px;
    z-index: 10;
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

const NavigationItem = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    grid-rows: span 2;

    a {
      margin: 0;
      padding: 0;
      color: #000;
      box-sizing: border-box;
      text-decoration: none;
      display: block;
      text-align: center;
      cursor: pointer;
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
  }

  @media screen and (min-width: 768px) {
    justify-self: end;
    grid-column: 7 / 8;
  }
`;

const SearchBtn = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 8 / 8;
  }
`;

const NavigationLanguage = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  height: 45px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    align-items: start;
    padding: 1rem 0;
    max-width: 1024px;
    z-index: 10;
  }
`;

const NavLangLogo = styled.img`
  justify-self: center;
  grid-column: 1;

  @media screen and (min-width: 768px) {
    grid-column: 1;
    justify-self: start;
  }
`;

const LanguageIcon = styled.a`
  @media screen and (max-width: 767px) {
    /* display: block; */
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 2;
  }
`;

const NavigationSearch = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    align-items: start;
    padding: 1rem 0;
    height: 45px;
    max-width: 1024px;
    z-index: 5;
  }
`;

const SearchBar = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    grid-column: span 5;

    input {
      border: none;
      outline: none;
    }
  }
`;

const SearchIcon = styled.a`
  @media screen and (max-width: 767px) {
    display: block;
    justify-self: end;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 2;
  }
`;

const CloseNavBtn = styled.a`
  @media screen and (max-width: 767px) {
    grid-column: 8 / 8;
    justify-self: end;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 8 / 8;
  }
`;
