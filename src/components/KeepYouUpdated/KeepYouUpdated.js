import React, { Component } from 'react';
import styled from 'styled-components';

class KeepYouUpdated extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <LeftColumn>
            <Title>We love to keep you updated</Title>
          </LeftColumn>
          <RightColumn>
            <FormHeader>
              We empower organizations and leaders to improve the employee and customer experience
              through proven, concise and engaging advisory.
            </FormHeader>
            <Form>
              <InputGroup>
                <label htmlFor="name" />
                <input type="text" name="" id="name" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="email" />
                <input type="email" name="" id="email" />
              </InputGroup>
              <Button>Submit</Button>
            </Form>
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
  grid-row: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  display: grid;

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
  grid-row: 2;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  display: grid;

  @media screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 4 / 7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr
    grid-row-gap: 2rem;
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
  align-self: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;

  @media screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 1;
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

const Form = styled.form`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 2fr;
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 0.25rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  text-transform: uppercase;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  height: 47px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;
