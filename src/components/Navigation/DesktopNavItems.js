import React from 'react';
import styled from 'styled-components';

const DesktopNavItems = () => {
  return (
    <NavItemsList>
      <NavigationItem className="NavigationItem">
        <a href="/">Solutions</a>
      </NavigationItem>
      <NavigationItem className="NavigationItem">
        <a href="/">Cases</a>
      </NavigationItem>
      <NavigationItem className="NavigationItem">
        <a href="/">Insights</a>
      </NavigationItem>
      <NavigationItem className="NavigationItem">
        <a href="/">About Us</a>
      </NavigationItem>
      <NavigationItem className="NavigationItem">
        <a href="/">Contact</a>
      </NavigationItem>
    </NavItemsList>
  );
};

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

const NavigationItem = styled.li`
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
    }
  }
`;
