import React from 'react';
import styled from 'styled-components';

import cross from './images/cross.svg';
import logo from './images/logo.svg';
import language from './images/language.svg';

const NavBarLang = props => {
  return (
    <NavigationLanguage>
      <Logo href="/">
        <img src={logo} className="logo" alt="logo" />
      </Logo>
      <LanguageIcon>
        <img src={language} alt="change language" />
      </LanguageIcon>
      <LanguageNavItemList>
        <LanguageNavItem>
          <a>UK</a>
        </LanguageNavItem>
        <LanguageNavItem>
          <a>DK</a>
        </LanguageNavItem>
        <LanguageNavItem>
          <a>NO</a>
        </LanguageNavItem>
        <LanguageNavItem>
          <a>SE</a>
        </LanguageNavItem>
      </LanguageNavItemList>
      <CloseNavBtn onClick={props.handleCloseBtnClick}>
        <img src={cross} alt="Back to Main Navigation" />
      </CloseNavBtn>
    </NavigationLanguage>
  );
};

export default NavBarLang;

//Navigation Language Styles

const NavigationLanguage = styled.div`
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
    grid-template-columns: repeat(8, 1fr);
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

const LanguageIcon = styled.a`
  @media screen and (max-width: 767px) {
    justify-self: start;
  }

  @media screen and (min-width: 768px) {
    justify-self: center;
    grid-column: 2;
  }
`;

const LanguageNavItemList = styled.div`
  grid-column: span 2;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
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
      text-decoration: none;
      display: block;
      text-align: center;
      cursor: pointer;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    grid-rows: span 2;

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
    grid-column: 8 / 8;
    cursor: pointer;
  }
`;
