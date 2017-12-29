import React, { Component } from 'react';
import styled from 'styled-components';
import worldImage from './images/world.svg';
import ButtonDark from '../Buttons/ButtonDark';

class MeasureWorldWide extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <LeftColumn>
            <WorldButton>What Does it mean to you?</WorldButton>
            <WorldImg src={worldImage} alt="offerImage" />
          </LeftColumn>
          <RightColumn>
            <Title>We measure worldwide</Title>
            <Content>
              Ro officiae conem facest, corporerum dolore, eribusd andamus voluptatem con rere
              parior sit officae. Aximagn ienimol orporem perum, aritis modiorp ostiam fa.
            </Content>
            <ButtonGroup>
              <ButtonDark>Read more</ButtonDark>
            </ButtonGroup>
          </RightColumn>
        </Container>
      </BackDrop>
    );
  }
}

export default MeasureWorldWide;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fff;
  background-origin: border-box;
  background-size: cover;
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    padding: 2rem;
    box-sizing: border-box;
    grid-row-gap: 2rem;
  }

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    padding: 3rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(6, 1fr);
    max-width: 1025px;
  }
`;

const LeftColumn = styled.div`
  grid-row: 1;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  display: grid;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 1;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: grid;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1 / 4;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: grid;
  }
`;

const RightColumn = styled.div`
  grid-row: 2;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 2;
    margin: 0;
    padding: 0 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 4 / 7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    justify-self: start;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 2.75rem;
    text-transform: uppercase;
    color: black;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: unset;
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 3rem;
    text-transform: uppercase;
    color: black;
  }
`;

const Content = styled.p`
  margin: 2rem 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 2;
    grid-column: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.5rem;
    color: black;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 2;
    grid-column: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.5rem;
    color: black;
  }
`;

const ButtonGroup = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
  display: grid;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-row: 3;
    grid-column: 1;
    display: grid;
    grid-template-columns: 0.5fr;
  }

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-row: 3;
    grid-column: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const WorldImg = styled.img`
  grid-row: 1;
  grid-column: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 1;
    grid-column: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

const WorldButton = styled.button`
  grid-row: 1;
  grid-column: 1;
  z-index: 2;
  width: 105px;
  height: 105px;
  margin: 0;
  padding: 0.5rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 300;
  color: black;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 100%;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 1;
    grid-column: 1;
    z-index: 2;
    width: 105px;
    height: 105px;
    margin: 0;
    padding: 0.5rem;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    font-weight: 300;
    color: black;
    text-transform: uppercase;
    border: 1px solid black;
    border-radius: 100%;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1;
    justify-self: start;
    z-index: 2;
    width: 139px;
    height: 139px;
    margin: 0;
    padding: 0.25rem;
    box-sizing: border-box;
    position: unset;
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    font-weight: 300;
    color: black;
    text-transform: uppercase;
    border: 1px solid black;
    border-radius: 100%;
    border-spacing: 1rem;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
