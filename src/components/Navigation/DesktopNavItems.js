import React from 'react';
import styled from 'styled-components';

const DesktopNavItems = () => {
  return (
    <NavItemsList>
      <NavigationItem>
        <a>Solutions</a>
      </NavigationItem>
      <NavigationItem>
        <a>Cases</a>
      </NavigationItem>
      <NavigationItem>
        <a>Insights</a>
      </NavigationItem>
      <NavigationItem>
        <a>About Us</a>
      </NavigationItem>
      <NavigationItem>
        <a>Contact</a>
      </NavigationItem>
    </NavItemsList>
  );
};

export default DesktopNavItems;

const NavItemsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-row-gap: 1rem;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }
`;

const NavigationItem = styled.li`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100%;

  a {
    margin: 0;
    padding: 0;
    color: #000;
    text-decoration: none;
    align-self: center;
    justify-self: start;
    box-sizing: border-box;
  }

  a:hover,
  a:active {
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: black;
    text-underline-position: auto;
  }

  a > img {
    align-self: center;
    justify-self: end;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
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

    a > img {
      display: none;
      align-self: center;
      justify-self: end;
      cursor: pointer;
    }
  }
`;
