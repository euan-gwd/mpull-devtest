import React from 'react';
import styled from 'styled-components';
import downarrow from './assets/down-caret.svg';

const NavItem = props => {
  return (
    <NavigationItem>
      <a>Solutions</a>
      <a>
        <img src={downarrow} alt="dropdown menu" />
      </a>
    </NavigationItem>
  );
};

export default NavItem;

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

  @media screen and (min-width: 600px) {
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
