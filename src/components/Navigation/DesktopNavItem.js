import React from 'react';
import styled from 'styled-components';

const DesktopNavItem = props => {
  return (
    <NavigationItem className="NavigationItem">
      <a href="/">{props.children}</a>
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
