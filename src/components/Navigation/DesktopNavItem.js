import React from 'react';
import styled from 'styled-components';

const DesktopNavItem = props => {
  return (
    <NavigationItem className="NavigationItem">
      <a href="/">{props.link}</a>
      {props.drop && (
        <DropMenu>
          <li>
            <a href="/">Employee Experience</a>
          </li>
          <li>
            <a href="/">Customer Experience</a>
          </li>
        </DropMenu>
      )}
    </NavigationItem>
  );
};

export default DesktopNavItem;

const NavigationItem = styled.li`
  display: none;

  @media screen and (min-width: 768px) {
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
    }
  }
`;

const DropMenu = styled.ul`
  margin: 0;
  padding: 1rem 0;
  box-sizing: border-box;
  list-style: none;
  display: grid;
  grid-gap: 1rem;
  border-top: 1px solid black;
  text-align: center;
  background-color: #fff;
`;
