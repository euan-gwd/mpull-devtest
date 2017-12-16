import React from 'react';
import styled from 'styled-components';

const DropDownMenu = props => {
  return (
    <NavMenu className={props.show ? `open` : `close`}>
      <DropMenu>
        <li>
          <a href="/">Employee Experience</a>
          <hr />
        </li>
        <li>
          <a href="/">Customer Experience</a>
          <hr />
        </li>
      </DropMenu>
    </NavMenu>
  );
};

export default DropDownMenu;

const NavMenu = styled.nav`
  position: relative;
  width: 100px;
  top: 0;
  left: 10px;
  background-color: #fff;
  padding: 0;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateY(0);
  }

  &.close {
    transform: translateY(-200px);
  }
`;

const DropMenu = styled.ul`
  margin: 0;
  padding: 2rem 1rem;
  box-sizing: border-box;
  list-style: none;
  display: grid;
  grid-gap: 1rem;
  height: 100px;
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

  hr {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a + hr {
    display: none;
  }

  a:hover + hr {
    display: block;
  }
`;
