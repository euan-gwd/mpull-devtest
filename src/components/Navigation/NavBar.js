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
            <LanguageBtn onClick={this.handleLanguageBtnClick}>
              <img src={language} alt="change language" />
            </LanguageBtn>
            <SearchBtn onClick={this.handleSearchBtnClick}>
              <img src={search} alt="search" />
            </SearchBtn>
          </MainNavigation>
        )}
        {showNavOption === 2 && (
          <NavigationLanguage>
            <NavLangLogo src={logo} className="logo" alt="logo" />
            <LanguageIcon>
              <img src={language} alt="change language" />
            </LanguageIcon>
            <LanguageNavItemList>
              <LanguageNavItem>
                <a>UK</a>
              </LanguageNavItem>
              <LanguageNavItem>
                <a>DK</a>
              </LanguageNavItem>
              <LanguageNavItem>
                <a>NO</a>
              </LanguageNavItem>
              <LanguageNavItem>
                <a>SE</a>
              </LanguageNavItem>
            </LanguageNavItemList>
            <CloseNavBtn onClick={this.handleCloseBtnClick}>
              <img src={cross} alt="Back to Main Navigation" />
            </CloseNavBtn>
          </NavigationLanguage>
        )}
        {showNavOption === 3 && (
          <NavigationSearch>
            <Logo href="/">
              <img src={logo} className="logo" alt="logo" />
            </Logo>
            <SearchIcon>
              <img src={search} alt="Search Bar" />
            </SearchIcon>
            <SearchNavItem>
              <input type="search" placeholder="Type to search..." />
            </SearchNavItem>
            <CloseNavBtn onClick={this.handleCloseBtnClick}>
              <img src={cross} alt="Back to Main Navigation" />
            </CloseNavBtn>
          </NavigationSearch>
        )}
      </ToolBar>
    );
  }
}

export default NavBar;

const ToolBar = styled.header`
  box-shadow: 0px 1px 2px 0px rgba(160, 165, 170, 0.75);
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
  display: block;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.a`
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

//Navigation Language Styles

const NavigationLanguage = styled.div`
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
    align-items: start;
    padding: 1rem 0;
    max-width: 1024px;
    z-index: 10;
  }
`;

const NavLangLogo = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-column: 1;
    justify-self: start;
    cursor: pointer;
  }
`;

const LanguageIcon = styled.a`
  @media screen and (max-width: 767px) {
    justify-self: start;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 2;
  }
`;

const LanguageNavItemList = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;

const LanguageNavItem = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    align-items: center;

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

    a:hover {
      text-decoration: underline;
    }
  }

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
      text-align: left;
      cursor: pointer;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

//Search Navigation Styles

const NavigationSearch = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    padding: 1rem 0;
    height: 45px;
    max-width: 1024px;
    z-index: 5;
  }
`;

const SearchNavItem = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    align-items: center;
    grid-column: 3 / 7;
    display: inline-block;

    input[type='search'] {
      border: 0;
      min-width: 100%;
      display: block;
      box-sizing: border-box;
      font-size: 0.75rem;
      line-height: 1.5rem;
    }
  }
`;

const SearchIcon = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
    justify-self: center;
    grid-column: 2;
  }
`;

const CloseNavBtn = styled.a`
  @media screen and (max-width: 767px) {
    grid-column: 4 / 4;
    justify-self: end;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 8 / 8;
    cursor: pointer;
  }
`;
