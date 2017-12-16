import React from 'react';
import styled from 'styled-components';

const DropDownMenu = props => {
  return (
    <NavMenu className={props.show ? `open` : `close`}>
      <DropMenu>
        <li>
          <a href="/">Employee Experience</a>
        </li>
        <li>
          <a href="/">Customer Experience</a>
        </li>
      </DropMenu>
    </NavMenu>
  );
};

export default DropDownMenu;

const NavMenu = styled.nav`
  position: relative;
  width: 100px;
  top: 1px;
  left: 0;
  background-color: #ffffff90;
  padding: 0;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
  border-top: 1px solid black;

  &.open {
    transform: translateY(0);
  }

  &.close {
    transform: translateY(-200px);
  }
`;

const DropMenu = styled.ul`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  display: grid;
  grid-gap: 1rem;
  height: 100px;
  text-align: center;
  font-size: 0.8rem;
  background-color: #ffffff;

  a {
    margin: 0;
    padding: 0;
    color: #000;
    background-color: #ffffff;
    box-sizing: border-box;
    text-decoration: none;
    display: block;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid black;
  }
`;
