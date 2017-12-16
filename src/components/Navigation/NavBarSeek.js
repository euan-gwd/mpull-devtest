import React from 'react';
import styled from 'styled-components';

import cross from './images/cross.svg';
import logo from './images/logo.svg';
import search from './images/search.svg';

const NavBarSeek = props => {
  return (
    <NavigationSearch>
      <Logo href="/">
        <img src={logo} className="logo" alt="logo" />
      </Logo>
      <SearchIcon>
        <img src={search} alt="Search Bar" />
      </SearchIcon>
      <SearchNavItem>
        <input type="search" placeholder="Type to search..." />
      </SearchNavItem>
      <CloseNavBtn onClick={props.handleCloseBtnClick}>
        <img src={cross} alt="Back to Main Navigation" />
      </CloseNavBtn>
    </NavigationSearch>
  );
};

export default NavBarSeek;

//Navigation Search Styles

const NavigationSearch = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 45px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    height: 45px;
    max-width: 1024px;
  }
`;

const Logo = styled.a`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-self: center;
  display: none;

  @media screen and (min-width: 768px) {
    grid-column: 1;
    justify-self: center;
    align-self: start;
    padding: 1rem 0;
    display: block;
  }
`;

const SearchIcon = styled.a`
  @media screen and (max-width: 767px) {
    justify-self: start;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    align-self: center;
    grid-column: 3;
  }
`;

const SearchNavItem = styled.div`
  grid-column: 2 / 4;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  input[type='search'] {
    border: 0;
    width: 100%;
    min-width: 100%;
    display: inline;
    box-sizing: border-box;
    font-size: 0.75rem;
    line-height: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    grid-column: 4 / 9;
    align-self: center;
    justify-self: start;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    input[type='search'] {
      border: 0;
      width: 100%;
      min-width: 100%;
      display: inline;
      box-sizing: border-box;
      font-size: 0.75rem;
      line-height: 1.5rem;
    }
  }
`;

const CloseNavBtn = styled.a`
  @media screen and (max-width: 767px) {
    grid-column: 4 / 4;
    justify-self: end;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 10 / 10;
    cursor: pointer;
  }
`;
