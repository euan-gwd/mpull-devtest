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
      <SearchNavItemList>
        <SearchIcon>
          <img src={search} alt="Search Bar" />
        </SearchIcon>
        <SearchNavItem>
          <input type="search" placeholder="Type to search..." />
        </SearchNavItem>
      </SearchNavItemList>
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
    grid-column: 1 / 3;
    justify-self: start;
    align-self: center;
    margin: 0;
    padding: 4px 0 0;
    box-sizing: border-box;
    display: block;
  }
`;

const SearchNavItemList = styled.div`
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  height: 45px;
  display: grid;
  grid-template-columns: 50px auto;

  @media screen and (min-width: 768px) {
    grid-column: 3 / 9;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 50px auto;
    border-left: 1px solid black;
    height: 45px;
  }
`;

const SearchIcon = styled.div`
  display: grid;
  align-items: center;
  justify-self: start;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 45px;

  @media screen and (min-width: 768px) {
    display: grid;
    align-items: center;
    justify-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 45px;
  }
`;

const SearchNavItem = styled.div`
  display: grid;
  align-items: center;

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