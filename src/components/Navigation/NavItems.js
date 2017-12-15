import React from 'react';
import NavItem from './NavItem';
import './NavItems.css';

const NavItems = () => {
  return (
    <ul className="NavigationItems">
      <NavItem link="/">Solutions</NavItem>
      <NavItem link="/">Cases</NavItem>
      <NavItem link="/">Insights</NavItem>
      <NavItem link="/">About Us</NavItem>
      <NavItem link="/">Contact</NavItem>
    </ul>
  );
};

export default NavItems;
