import React from 'react';
import styled from 'styled-components';

const AboutUsDropDownMenu = props => {
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

export default AboutUsDropDownMenu;

const NavMenu = styled.nav`
  width: 100px;
  top: 0;
  left: 22%;
  z-index: 2;
  background-color: #fff;
  padding: 0;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateY(0);
  }

  &.close {
    transform: translateY(-100%);
  }
`;

const DropMenu = styled.ul`
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  list-style: none;
  display: grid;
  grid-gap: 1rem;
  border-top: 1px solid black;
  text-align: center;
  font-size: 0.8rem;
  background-color: #fff;

  a {
    margin: 0;
    padding: 0;
    color: #000;
    box-sizing: border-box;
    text-decoration: none;
    display: block;
    text-align: center;
    cursor: pointer;
  }
`;
