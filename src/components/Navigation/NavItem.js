import React from 'react';
import styled from 'styled-components';

const NavItem = props => {
  return (
    <NavigationItem>
      <a href="/" className={props.active ? `.active` : null}>
        {props.children}
      </a>
    </NavigationItem>
  );
};

export default NavItem;

const NavigationItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;

  a {
    color: #000;
    text-decoration: none;
    padding: 16px 1rem;
    box-sizing: border-box;
    display: block;
  }

  a:hover,
  a:active {
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: black;
    text-underline-position: auto;
  }
`;
