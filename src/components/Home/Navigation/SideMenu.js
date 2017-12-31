import React from 'react';
import MobileNavItems from './MobileNavItems';
import styled from 'styled-components';
import { I18n } from 'react-i18next';
import search from './images/search.svg';

const SideMenu = props => {
  return (
    <I18n ns="translations">
      {(t, { i18n }) => (
        <NavMenu className={props.open ? `open` : `close`}>
          <MobileNavItems />
          <SearchBar>
            <SearchInput type="search" placeholder={t('SearchPlaceholder')} />
            <SearchBtn src={search} alt="" />
          </SearchBar>
        </NavMenu>
      )}
    </I18n>
  );
};

export default SideMenu;

const NavMenu = styled.nav`
  position: fixed;
  width: 280px;
  min-width: 190px;
  max-width: 80%;
  height: 100%;
  min-height: 100vh;
  top: 56px;
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  height: 56px;
  width: 100%;
  display: grid;
  grid-template-column: 2fr 1fr;
  grid-row-gap: 2rem;
`;

const SearchInput = styled.input`
  grid-column: 1;
  margin: 0;
  padding: 0;
  padding-right: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.5rem;
  border: 0;

  &:focus {
    outline: 0;
    width: 100%;
  }
`;

const SearchBtn = styled.img`
  grid-column: 2;
  margin: 0;
  padding: 0;
  padding-right: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.5rem;
  border: 0;
  cursor: pointer;
`;
