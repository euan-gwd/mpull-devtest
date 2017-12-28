import React, { Component } from 'react';
import styled from 'styled-components';
import clients from './images/clients.png';
import ButtonDark from '../Buttons/ButtonDark';

class WhoWeWorkWith extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <LeftColumn>
            <ImgTable src={clients} alt="offerImage" />
          </LeftColumn>
          <RightColumn>
            <Title>Hvem arbejder vi med</Title>
            <Content>
              Ro officiae conem facest, corporerum dolore, eribusd andamus voluptatem con rere
              parior sit officae. Aximagn ienimol orporem perum, aritis modiorp ostiam fa.
            </Content>
            <ButtonGroup>
              <ButtonDark>Læs mere</ButtonDark>
            </ButtonGroup>
          </RightColumn>
        </Container>
      </BackDrop>
    );
  }
}

export default WhoWeWorkWith;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fff;
  background-origin: border-box;
  background-size: cover;

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff;
    background-origin: border-box;
    background-size: cover;
    background-position: 0 0, center;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    padding: 3rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(6, 1fr);
    max-width: 1024px;
  }
`;

const LeftColumn = styled.div`
  grid-row: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;

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

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 4 / 7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
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
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
  display: grid;

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

const ImgTable = styled.img`
  grid-row: 1;
  grid-column: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
