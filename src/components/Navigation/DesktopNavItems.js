import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import SolutionsDropDownMenu from './DropDowns/SolutionsDropDownMenu';
import InsightsDropDownMenu from './DropDowns/InsightsDropDownMenu';
import AboutUsDropDownMenu from './DropDowns/AboutUsDropDownMenu';

class DesktopNavItems extends Component {
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
      <Fragment>
        <NavItemsList>
          <NavigationItem className="NavigationItem">
            <a onClick={this.handleSolutionsDropMenuToggle}>Solutions</a>
          </NavigationItem>
          <NavigationItem className="NavigationItem">
            <a>Cases</a>
          </NavigationItem>
          <NavigationItem className="NavigationItem">
            <a onClick={this.handleInsightsDropMenuToggle}>Insights</a>
          </NavigationItem>
          <NavigationItem className="NavigationItem">
            <a onClick={this.handleAboutUsDropMenuToggle}>About Us</a>
          </NavigationItem>
          <NavigationItem className="NavigationItem">
            <a>Contact</a>
          </NavigationItem>
        </NavItemsList>
        <SolutionsDropDownMenu show={this.state.showSolutionsDropMenu} />
        <InsightsDropDownMenu show={this.state.showInsightsDropMenu} />
        <AboutUsDropDownMenu show={this.state.showAboutUsDropMenu} />
      </Fragment>
    );
  }
}

export default DesktopNavItems;

const NavItemsList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    list-style: none;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat (6, 1fr);
    grid-auto-flow: column;
    align-items: center;
    box-sizing: border-box;
  }
`;

const NavigationItem = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
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
  }
`;
