import React from 'react';
import MobileNavItems from './MobileNavItems';
import styled from 'styled-components';
import search from './assets/search.svg';
import './SideMenu.css';

const SideMenu = props => {
  return (
    <nav className={props.open ? `mobileNav open` : `mobileNav close`}>
      <MobileNavItems />
      <SearchBar>
        <input type="search" placeholder="Type to search..." id="" />
        <a>
          <img src={search} alt="dropdown menu" />
        </a>
      </SearchBar>
    </nav>
  );
};

export default SideMenu;

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
