import React, { Component } from 'react';
import styled from 'styled-components';
import bdImage from './images/woman_telephone.png';
import ButtonDark from '../Buttons/ButtonDark';

class ProvenSurveySolutions extends Component {
  state = {};
  render() {
    return (
      <BackDrop image={bdImage}>
        <Container>
          <Title>We do Proven Survey Solutions</Title>
          <Content>
            Ro officiae conem facest, corporerum dolore, eribusd andamus voluptatem con rere parior
            sit officae. Aximagn ienimol orporem perum, aritis modiorp ostiam fa.
          </Content>
          <ButtonGroup>
            <ButtonDark>Read More</ButtonDark>
            <ButtonDark>Customer Survey</ButtonDark>
          </ButtonGroup>
        </Container>
      </BackDrop>
    );
  }
}

export default ProvenSurveySolutions;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: url(${props => props.image}) no-repeat;
  background-origin: border-box;
  background-size: cover;
  background-position: -3cm 0, center;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: url(${props => props.image}) no-repeat;
    background-origin: border-box;
    background-size: cover;
    background-position: 0 0, center;
  }

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: url(${props => props.image}) no-repeat;
    background-origin: border-box;
    background-size: cover;
    background-position: 0 0, center;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 0.25fr 1fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem;
    box-sizing: border-box;
  }

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    padding: 3rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(6, 1fr);
    max-width: 1025px;
  }
`;

const Title = styled.h1`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.75rem;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 4 / 7;
    align-self: end;
    margin: 0;
    padding: 0 6rem 0 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    font-size: 3rem;
    text-transform: uppercase;
    color: black;
  }
`;

const Content = styled.p`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;

  @media screen and (min-width: 1025px) {
    grid-row: 2;
    grid-column: 4 / 7;
    align-self: end;
    justify-self: start;
    margin: 0;
    padding: 0 3.5rem 0 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.5rem;
    color: black;
  }
`;

const ButtonGroup = styled.div`
  margin: 0 1rem;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
  display: grid;
  grid-row-gap: 1rem;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
  }

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    grid-row: 3;
    grid-column: 4 / 7;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`;
