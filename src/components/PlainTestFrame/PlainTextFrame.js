import React, { Component } from 'react';
import styled from 'styled-components';

class PlainTextFrame extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <Title>We drive positive change</Title>
          <Content>
            We empower organizations and leaders to improve the employee and customer experience
            through proven, concise and engaging advisory. Ennovas ISO certificate puts severe
            demands to our Development and implementation of employee- and customer analysis. We are
            very proud of the certification which is in line with Ennova‘s continued ambition to
            deliver the best solutions in the market.
          </Content>
        </Container>
      </BackDrop>
    );
  }
}

export default PlainTextFrame;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
  background-size: cover;
`;

const Container = styled.div`
  margin: 3rem 1rem;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 3rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    max-width: 1024px;
  }
`;

const Title = styled.h1`
  margin: 1rem 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 1 / 4;
    align-self: start;
    margin: 0 2rem 0 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 3.25rem;
    text-transform: uppercase;
    color: black;
  }
`;

const Content = styled.div`
  margin: 1rem 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  color: black;

  @media screen and (min-width: 768px) {
    grid-row: 1;
    grid-column: 4 / 7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    line-height: 1.5rem;
    font-size: 1rem;
    color: black;
  }
`;
