import React from 'react';
import styled from 'styled-components';
import { I18n } from 'react-i18next';

const DropDownMenu = props => {
  return (
    <I18n ns="translations">
      {(t, { i18n }) => (
        <NavMenu className={props.show ? `open` : `close`}>
          <DropMenu>
            <li>
              <a href="/">{t('EmployeeExperienceBtn')}</a>
            </li>
            <li>
              <a href="/">{t('CustomerExperienceBtn')}</a>
            </li>
          </DropMenu>
        </NavMenu>
      )}
    </I18n>
  );
};

export default DropDownMenu;

const NavMenu = styled.nav`
  position: relative;
  width: 100%;
  top: 1px;
  left: 0;
  background-color: #fff;
  padding: 0;
  box-sizing: border-box;
  transition: opacity 0.3s ease-in-out;
  border-top: 1px solid black;

  &.open {
    opacity: 1;
  }

  &.close {
    opacity: 0;
  }
`;

const DropMenu = styled.ul`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  display: grid;
  grid-gap: 1rem;
  height: 100px;
  text-align: center;
  font-size: 0.8rem;
  background-color: #ffffff;

  a {
    margin: 0;
    padding: 0;
    color: #000;
    background-color: #ffffff;
    box-sizing: border-box;
    text-decoration: none;
    display: block;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid black;
  }
`;
