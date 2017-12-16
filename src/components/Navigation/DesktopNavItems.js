import React from 'react';
import styled from 'styled-components';
import DesktopNavItem from './DesktopNavItem';

const DesktopNavItems = () => {
  return (
    <NavItemsList>
      <DesktopNavItem link="Solutions" drop />
      <DesktopNavItem link="Cases" />
      <DesktopNavItem link="Insights" drop />
      <DesktopNavItem link="About Us" drop />
      <DesktopNavItem link="Contact" />
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
