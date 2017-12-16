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
        <Container>
          <MobileMenu>
            <img
              src={this.props.open ? cross : burger}
              alt="mobile navigation menu"
              onClick={this.props.handleMenuToggle}
            />
          </MobileMenu>
          <Logo src={logo} className="logo" alt="logo" />
          <NavigationItem className="NavigationItem">
            <a onClick={this.handleSolutionsDropMenuToggle}>Solutions</a>
            <DropDownMenu show={this.state.showSolutionsDropMenu} />
          </NavigationItem>
          <NavigationItem className="NavigationItem">
            <a>Cases</a>
          </NavigationItem>
          <NavigationItem className="NavigationItem">
            <a onClick={this.handleInsightsDropMenuToggle}>Insights</a>
            <DropDownMenu show={this.state.showInsightsDropMenu} />
          </NavigationItem>
          <NavigationItem className="NavigationItem">
            <a onClick={this.handleAboutUsDropMenuToggle}>About Us</a>
            <DropDownMenu show={this.state.showAboutUsDropMenu} />
          </NavigationItem>
          <NavigationItem className="NavigationItem">
            <a>Contact</a>
          </NavigationItem>
          <Language>
            <img src={language} alt="change language" />
          </Language>
          <Search>
            <img src={search} alt="search" />
          </Search>
        </Container>
      </ToolBar>
    );
  }
}

export default NavBar;

const ToolBar = styled.header`
  box-shadow: 0px 1px 2px 0px rgba(160, 165, 170, 0.75);
`;

const Container = styled.div`
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
  }
`;

const Language = styled.a`
  @media screen and (max-width: 767px) {
    display: block;
    justify-self: end;
  }

  @media screen and (min-width: 768px) {
    justify-self: end;
    grid-column: 7 / 8;
  }
`;

const Search = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 8 / 8;
  }
`;
