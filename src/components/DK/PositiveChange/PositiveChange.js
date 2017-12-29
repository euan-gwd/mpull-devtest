import React, { Component } from 'react';
import styled from 'styled-components';

class PositiveChange extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <Title>Vi kører positive forandringer</Title>
          <Content>
            Vi bemyndige organisationer og ledere til at forbedre den ansatte og kundeoplevelse
            gennem bevist, koncis og engagerende rådgivende. Ennovas ISO-certifikat stiller store
            krav til vores Udvikling og implementering af medarbejder- og kundeanalyser. Vi er meget
            stolte af den certificering, som er i tråd med Ennova fortsatte ambition om at levere de
            bedste løsninger på markedet.
          </Content>
        </Container>
      </BackDrop>
    );
  }
}

export default PositiveChange;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
  background-size: cover;
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    padding: 2rem;
    box-sizing: border-box;
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

const Title = styled.h1`
  margin: 1rem 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.75rem;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 1 / 4;
    align-self: start;
    margin: 0 2rem 0 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 3rem;
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

  @media screen and (min-width: 1025px) {
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
