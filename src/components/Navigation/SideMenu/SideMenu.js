import React from 'react';
import NavItems from '../NavItems';
import styled from 'styled-components';
import search from '../../../assets/search.svg';

import './SideMenu.css';

const SideMenu = props => {
  return (
    <MobileNav>
      <NavItems />
      <SearchBar>
        <input type="search" placeholder="Type to search..." id="" />
        <a>
          <img src={search} alt="dropdown menu" />
        </a>
      </SearchBar>
    </MobileNav>
  );
};

export default SideMenu;

const MobileNav = styled.nav`
  position: fixed;
  width: 280px;
  max-width: 60%;
  height: 100%;
  min-height: 100vh;
  top: 45px;
  left: 0;
  z-index: 10;
  background-color: #fff;
  border-right: 1px solid black;
  padding: 2rem 1rem;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  .Open {
    transform: translateX(0);
  }

  .Close {
    transform: translateX(-100%);
  }

  @media screen and (min-width: 600px) {
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
