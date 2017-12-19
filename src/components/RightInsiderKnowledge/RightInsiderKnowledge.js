import React, { Component } from 'react';
import styled from 'styled-components';
import offerImage from './images/offer.png';

class RightInsiderKnowledge extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <LeftColumn>
            <Title>We have the right insider Knowledge</Title>
            <Content>
              Ro officiae conem facest, corporerum dolore, eribusd andamus voluptatem con rere
              parior sit officae. Aximagn ienimol orporem perum, aritis modiorp ostiam fa.
            </Content>
            <ButtonGroup>
              <Button>Read the new glex</Button>
            </ButtonGroup>
          </LeftColumn>
          <RightColumn>
            <OfferButton>Get new insights in our survey rapport</OfferButton>
            <OfferImg src={offerImage} alt="offerImage" />
          </RightColumn>
        </Container>
      </BackDrop>
    );
  }
}

export default RightInsiderKnowledge;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f0f1f0;
  background-origin: border-box;
  background-size: cover;
  background-position: -3cm 0, center;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f1f0;
    background-origin: border-box;
    background-size: cover;
    background-position: 0 0, center;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 1rem 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: 768px) {
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
  grid-row: 2;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
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
  padding: 0 2rem;
  box-sizing: border-box;
  height: 100%;
  display: inline-block;

  @media screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 4 / 7;
    justify-self: end;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: inline-block;
  }
`;

const Title = styled.h1`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  top: -50px;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 768px) {
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
  margin: 2rem 1rem 2rem;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;

  @media screen and (min-width: 768px) {
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
  margin: 0 1rem;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
  display: grid;

  @media screen and (min-width: 768px) {
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

const Button = styled.button`
  margin: 0;
  padding: 0.25rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  color: black;
  border: 1px solid black;
  background-color: transparent;
  height: 47px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const OfferImg = styled.img`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  height: 35vh;
  object-fit: cover;
  position: relative;
  top: -70px;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: unset;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const OfferButton = styled.button`
  position: relative;
  z-index: 2;
  right: -140px;
  width: 139px;
  height: 139px;
  margin: 0;
  padding: 0.5rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
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

  @media screen and (min-width: 768px) {
    position: relative;
    top: -200px;
    right: -410px;
    width: 139px;
    height: 139px;
    margin: 0;
    padding: 0.25rem;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
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