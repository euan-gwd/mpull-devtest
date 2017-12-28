import React, { Component } from 'react';
import styled from 'styled-components';
import phoneApp from './images/mobile.svg';
import ButtonDark from '../Buttons/ButtonDark';

class OurSurveySolutions extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <LeftColumn>
            <Title>Våra beprövade enkätlösningar</Title>
            <Content>
              Ro officiae conem facest, corporerum dolore, eribusd andamus voluptatem con rere
              parior sit officae. Aximagn ienimol orporem perum, aritis modiorp ostiam fa.
            </Content>
            <ButtonGroup>
              <ButtonDark>Läs den nya glex</ButtonDark>
            </ButtonGroup>
          </LeftColumn>
          <RightColumn>
            <OfferImg src={phoneApp} alt="phone" />
            <OfferButton>Testa vår undersökning testversion</OfferButton>
          </RightColumn>
        </Container>
      </BackDrop>
    );
  }
}

export default OurSurveySolutions;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f0f1f0;
  background-size: cover;

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f1f0;
    background-size: cover;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    padding: 3rem 0 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(6, 1fr);
    max-width: 1024px;
  }
`;

const LeftColumn = styled.div`
  grid-row: 2;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-row: repeat (3, 1fr);
  grid-template-column: 1fr;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1 / 4;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
  }
`;

const RightColumn = styled.div`
  grid-row: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 4 / 7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h1`
  align-self: center;
  margin: 2rem 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: unset;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 3rem;
    text-transform: uppercase;
    color: black;
  }
`;

const Content = styled.p`
  align-self: center;
  margin: 2rem 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;

  @media screen and (min-width: 1025px) {
    grid-row: 3;
    grid-column: 1;
    margin: 0;
    padding: 0 3.5rem 0 0;
    box-sizing: border-box;
    position: unset;
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
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
  display: grid;

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-row: 4;
    grid-column: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`;

const OfferImg = styled.img`
  grid-row: 1;
  grid-column: 1 / 3;
  margin: 3rem auto 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1 / 3;
    justify-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const OfferButton = styled.button`
  grid-row: 1;
  grid-column: 2;
  z-index: 2;
  width: 139px;
  height: 139px;
  margin: 0;
  padding: 0.75rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 0.75rem;
  font-weight: 300;
  color: black;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 50% 50%;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 2;
    justify-self: end;
    z-index: 2;
    width: 139px;
    height: 139px;
    margin: 0;
    padding: 0.75rem;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-size: 0.75rem;
    font-weight: 300;
    color: black;
    text-transform: uppercase;
    border: 1px solid black;
    border-radius: 50% 50%;
    border-spacing: 1rem;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
