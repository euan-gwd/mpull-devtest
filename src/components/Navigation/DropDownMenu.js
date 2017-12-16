import React from 'react';
import styled from 'styled-components';

const DropDownMenu = props => {
  return (
    <NavMenu className={props.open ? `open` : `close`}>
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
  position: fixed;
  width: 280px;
  min-width: 190px;
  max-width: 70%;
  height: 100%;
  top: 54px;
  left: 0;
  z-index: 10;
  background-color: #fff;
  border-right: 1px solid black;
  padding: 2rem 1rem;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
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
