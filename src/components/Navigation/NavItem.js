import React from 'react';
import './NavItem.css';

const NavItem = props => {
  return (
    <li>
      <a href="/">{props.name}</a>
    </li>
  );
};

export default NavItem;
