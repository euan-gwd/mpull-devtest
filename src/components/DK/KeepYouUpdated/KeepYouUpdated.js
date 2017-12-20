import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonLight from '../Buttons/ButtonLight';

class KeepYouUpdated extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <LeftColumn>
            <Title>Vi elsker at holde dig opdateret</Title>
          </LeftColumn>
          <RightColumn>
            <FormHeader>
              Vi bemyndige organisationer og ledere til at forbedre den ansatte og kundeoplevelse
              gennem bevist, koncis og engagerende rådgivende.
            </FormHeader>
            <FormInputGroup>
              <FormInputLabel>Navn</FormInputLabel>
              <FormInput type="text" placeholder="Indtast dit navn..." />
            </FormInputGroup>
            <FormInputGroup>
              <FormInputLabel>Email</FormInputLabel>
              <FormInput type="email" placeholder="Indtast din email..." />
            </FormInputGroup>
            <ButtonGroup>
              <ButtonLight>Indsend</ButtonLight>
            </ButtonGroup>
          </RightColumn>
        </Container>
      </BackDrop>
    );
  }
}

export default KeepYouUpdated;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000;
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 1rem;
  box-sizing: border-box;
  display: grid;
  grid-row-gap: 2rem;

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
  }
`;

const RightColumn = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  @media screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 4 / 7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: grid;
    grid-template-rows: repeat (4, 1fr);
    grid-row-gap: 1rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;

  @media screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: unset;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 3rem;
    text-transform: uppercase;
    color: white;
  }
`;

const FormHeader = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
`;

const FormInputGroup = styled.div`
  align-self: end;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: block;
`;

const FormInputLabel = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 0.75rem;
  font-weight: 300;
  color: grey;
`;

const FormInput = styled.input`
  margin: 0;
  padding: 0.25rem 0 0.25rem 1rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  color: white;
  border: 1px solid grey;
  background-color: grey;
  height: 47px;
  min-width: 100%;

  &::placeholder {
    color: white;
    font-size: 0.85rem;
  }

  &::-moz-placeholder {
    opacity: 1;
    font-size: 0.85rem;
  }

  &:focus {
    outline: 1px solid white;
  }
`;

const ButtonGroup = styled.div`
  grid-column: 1;
  align-self: end;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-row: 4;
    grid-column: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
