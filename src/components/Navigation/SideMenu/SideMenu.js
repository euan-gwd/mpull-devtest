import React from 'react';
import MobileNavItems from '../MobileNavItems';
import styled from 'styled-components';
import search from '../assets/search.svg';

const SideMenu = props => {
  console.log(props);
  return (
    <MobileNav show={props.open}>
      <MobileNavItems />
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
  position: absolute;
  width: 280px;
  min-width: 190px;
  max-width: 60%;
  height: 100%;
  min-height: 100vh;
  top: 54px;
  left: -340px;
  z-index: 10;
  background-color: #fff;
  border-right: 1px solid black;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
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
