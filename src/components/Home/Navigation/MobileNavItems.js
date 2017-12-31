import React from 'react';
import styled from 'styled-components';
import { I18n } from 'react-i18next';
import downarrow from './images/down-caret.svg';

const MobileNavItems = () => {
  return (
    <I18n ns="translations">
      {(t, { i18n }) => (
        <NavItemsList>
          <NavigationItem>
            <a>{t('SolutionsMenu')}</a>
            <a>
              <img src={downarrow} alt="dropdown menu" />
            </a>
          </NavigationItem>
          <NavigationItem>
            <a>{t('CasesMenu')}</a>
          </NavigationItem>
          <NavigationItem>
            <a>{t('InsightsMenu')}</a>
            <a>
              <img src={downarrow} alt="dropdown menu" />
            </a>
          </NavigationItem>
          <NavigationItem>
            <a>{t('AboutUsMenu')}</a>
            <a>
              <img src={downarrow} alt="dropdown menu" />
            </a>
          </NavigationItem>
          <NavigationItem>
            <a>{t('ContactMenu')}</a>
          </NavigationItem>
        </NavItemsList>
      )}
    </I18n>
  );
};

export default MobileNavItems;

const NavItemsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-row-gap: 1rem;
`;

const NavigationItem = styled.li`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100%;

  a {
    margin: 0;
    padding: 0;
    color: #000;
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    height: 40px;
    align-self: center;
    justify-self: start;
    box-sizing: border-box;
  }

  a:hover,
  a:active {
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: black;
    text-underline-position: auto;
  }

  a > img {
    align-self: center;
    justify-self: end;
    cursor: pointer;
  }
`;
