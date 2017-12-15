import React from 'react';
import NavItem from './NavItem';
import './NavItems.css';

const NavItems = () => {
  return (
    <ul className="NavigationItems">
      <NavItem name="Solutions" />
      <NavItem name="Cases" />
      <NavItem name="Insights" />
      <NavItem name="About Us" />
      <NavItem name="Contact" />
    </ul>
  );
};

export default NavItems;
