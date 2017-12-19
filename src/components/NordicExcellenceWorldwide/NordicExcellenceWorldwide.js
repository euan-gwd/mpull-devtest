import React, { Component } from 'react';
import styled from 'styled-components';

class NordicExcellenceWorldwide extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <Title>Nordic Excellence Worldwide</Title>
          <Content>
            Ennova leverer viden, der forandrer. Vi rådgiver gennem hele processen, så ny viden
            bliver forankret i virksomheden – og fører til den ønskede forandring.
          </Content>
        </Container>
      </BackDrop>
    );
  }
}

export default NordicExcellenceWorldwide;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: white;
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 3rem 0;
    box-sizing: border-box;
    max-width: 1024px;
  }
`;

const Title = styled.h1`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 768px) {
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
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;

  @media screen and (min-width: 768px) {
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
