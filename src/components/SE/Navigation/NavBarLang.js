import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInRight, slideOutRight } from 'react-animations';
import { NavLink } from 'react-router-dom';

import cross from './images/cross.svg';
import logo from './images/logo.svg';
import language from './images/language.svg';

const NavBarLang = props => {
  return (
    <NavigationLanguage>
      <Logo href="/se/home">
        <img src={logo} className="logo" alt="logo" />
      </Logo>
      <LanguageNavItemList>
        <LangIcon>
          <img src={language} alt="change language" />
        </LangIcon>
        <LanguageNavItem>
          <NavLink to="/se/home">UK</NavLink>
        </LanguageNavItem>
        <LanguageNavItem>
          <NavLink to="/dk/home">DK</NavLink>
        </LanguageNavItem>
        <LanguageNavItem>
          <NavLink to="/no/home">NO</NavLink>
        </LanguageNavItem>
        <LanguageNavItem>
          <NavLink to="/se/home">SE</NavLink>
        </LanguageNavItem>
      </LanguageNavItemList>
      <CloseNavBtn onClick={props.handleCloseBtnClick}>
        <img src={cross} alt="Tillbaka till huvudnavigering" />
      </CloseNavBtn>
    </NavigationLanguage>
  );
};

export default NavBarLang;

//Navigation Language Styles

const slideInAnimation = keyframes`${slideInRight}`;
const slideOutAnimation = keyframes`${slideOutRight}`;

const NavigationLanguage = styled.div`
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
    padding: 0;
    box-sizing: border-box;
    display: block;
  }
`;

const LanguageNavItemList = styled.div`
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  height: 56px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-column: 3 / 6;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(5, 75px);
    border-left: 1px solid black;
    height: 56px;
    animation: 0.3s ${slideInAnimation};
  }

  @media screen and (min-width: 1025px) {
    grid-column: 3 / 9;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(5, 75px);
    border: 0;
    border-left: 1px solid black;
    height: 56px;
    animation: 0.3s ${slideInAnimation};
  }
`;

const LangIcon = styled.div`
  display: grid;
  align-items: center;
  justify-self: start;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 56px;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    justify-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 56px;
    display: grid;
  }

  @media screen and (min-width: 1025px) {
    display: grid;
    align-items: center;
    justify-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 56px;
  }
`;

const LanguageNavItem = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  align-items: center;

  a {
    margin: 0;
    padding: 0;
    color: #000;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    text-align: center;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    align-items: center;

    a {
      margin: 0;
      padding: 0;
      color: #000;
      box-sizing: border-box;
      text-decoration: none;
      display: block;
      text-align: left;
      cursor: pointer;
    }

    a:hover {
      text-decoration: underline;
    }

    &:first-of-type {
      justify-self: center;
    }
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
    animation: 0.3s ${slideOutAnimation};
  }

  @media screen and (min-width: 1025px) {
    justify-self: center;
    grid-column: 10 / 10;
    cursor: pointer;
    animation: 0.3s ${slideOutAnimation};
  }
`;
