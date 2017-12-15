import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';

const NavItems = () => {
  return (
    <NavigationItems>
      <NavItem link="/">Solutions</NavItem>
      <NavItem link="/">Cases</NavItem>
      <NavItem link="/">Insights</NavItem>
      <NavItem link="/">About Us</NavItem>
      <NavItem link="/">Contact</NavItem>
    </NavigationItems>
  );
};

export default NavItems;

const NavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;
