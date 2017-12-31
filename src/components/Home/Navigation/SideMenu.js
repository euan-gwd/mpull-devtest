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
            <SearchBar>
              <SearchInput type="search" placeholder={t('SearchPlaceholder')} icon={search} />
            </SearchBar>
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
