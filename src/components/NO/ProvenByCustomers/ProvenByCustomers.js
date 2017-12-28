import React, { Component } from 'react';
import styled from 'styled-components';
import bdImage from './images/proven.png';
import ButtonRound from '../Buttons/ButtonRound';
import ButtonLight from '../Buttons/ButtonLight';

class ProvenByCustomers extends Component {
  state = {};
  render() {
    return (
      <BackDrop image={bdImage}>
        <Container>
          <LeftColumn>
            <Title>Vi er påvist av våre kunder</Title>
            <Content>
              Ro officiae conem facest, corporerum dolore, eribusd andamus voluptatem con rere
              parior sit officae. Aximagn ienimol orporem perum, aritis modiorp ostiam fa.
            </Content>
            <ButtonGroup>
              <ButtonLight>Medarbejder undersøgelse</ButtonLight>
              <ButtonLight>Kunde undersøkelse</ButtonLight>
            </ButtonGroup>
          </LeftColumn>
          <RightColumn>
            <PlayIcon>
              <ButtonRound />
            </PlayIcon>
          </RightColumn>
        </Container>
      </BackDrop>
    );
  }
}

export default ProvenByCustomers;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: grey;
  background: url(${props => props.image}) no-repeat;
  background-origin: border-box;
  background-size: cover;
  background-position-x: right;

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: url(${props => props.image}) no-repeat;
    background-origin: border-box;
    background-size: cover;
    background-position-x: center;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 1rem;
  box-sizing: border-box;
  display: grid;

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    padding: 3rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    max-width: 1024px;
  }
`;

const LeftColumn = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1 / 4;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const RightColumn = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 4 / 7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: grid;
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
  color: white;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 3rem;
    text-transform: uppercase;
    color: white;
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
  color: white;

  @media screen and (min-width: 1025px) {
    grid-row: 3;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.5rem;
    color: white;
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
  color: white;
  display: grid;
  grid-row-gap: 1rem;

  @media screen and (min-width: 1025px) {
    grid-row: 4;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow-wrap: break-word;
  }
`;

const PlayIcon = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: none;
  cursor: pointer;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1;
    justify-self: end;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: block;
  }
`;
