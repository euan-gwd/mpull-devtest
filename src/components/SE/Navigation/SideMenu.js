import React from 'react';
import MobileNavItems from './MobileNavItems';
import styled from 'styled-components';
import search from './images/search.svg';

const SideMenu = props => {
  return (
    <NavMenu className={props.open ? `open` : `close`}>
      <MobileNavItems />
      <SearchBar>
        <input type="search" placeholder="Skriv för att söka..." id="" />
        <a>
          <img src={search} alt="dropdown menu" />
        </a>
      </SearchBar>
    </NavMenu>
  );
};

export default SideMenu;

const NavMenu = styled.nav`
  position: fixed;
  width: 280px;
  min-width: 190px;
  max-width: 70%;
  height: 100%;
  min-height: 100vh;
  top: 57px;
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

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

const SearchBar = styled.div`
  margin-top: 3rem;
  font-size: 0.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  input[type='search'] {
    border: none;
    outline: none;

    font-family: 'Roboto Slab', serif;
    font-weight: 100;
  }

  a {
    align-self: center;
    justify-self: end;
    cursor: pointer;
  }
`;
