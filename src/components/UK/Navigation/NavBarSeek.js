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
      <SearchNavBar>
        <SearchInput type="search" placeholder="Type to search..." icon={search} />
      </SearchNavBar>
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
  height: 56px;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    align-items: center;
    height: 56px;
  }

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    height: 56px;
    max-width: 1025px;
  }
`;

const Logo = styled.a`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-self: center;
  display: none;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    padding: 0;
    grid-column: 1;
    justify-self: center;
    display: block;
  }

  @media screen and (min-width: 1025px) {
    grid-column: 1 / 3;
    justify-self: start;
    align-self: center;
    margin: 0;
    padding: 1.4rem 0;
    box-sizing: border-box;
    display: block;
  }
`;

const SearchNavBar = styled.div`
  grid-row: 1;
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  height: 56px;
  display: grid;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 1;
    grid-column: 3 / 7;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-left: 1px solid black;
    height: 56px;
  }

  @media screen and (min-width: 1025px) {
    grid-column: 3 / 9;
    margin: 0;
    padding: 0;
    padding-left: 1.5rem;
    box-sizing: border-box;
    border: 0;
    border-left: 1px solid black;
    height: 56px;
  }
`;

const SearchInput = styled.input`
  margin: 0;
  padding: 0;
  padding-left: 2.25rem;
  box-sizing: border-box;
  height: 80%;
  width: auto;
  transition: width 0.4s ease-in-out;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 0.5rem;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.5rem;
  border: 0;

  &:focus {
    outline: 0;
    width: 100%;
  }

  &::placeholder {
    font-size: 0.75rem;
  }

  &::-moz-placeholder {
    font-size: 0.75rem;
  }
`;

const CloseNavBtn = styled.a`
  @media screen and (max-width: 767px) {
    grid-column: 4 / 4;
    justify-self: end;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    padding: 0;
    grid-column: 8 / 8;
    justify-self: end;
    cursor: pointer;
  }

  @media screen and (min-width: 1025px) {
    justify-self: center;
    grid-column: 10 / 10;
    cursor: pointer;
  }
`;
