import React, { Component } from 'react';
import styled from 'styled-components';

class PositiveChange extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <Title>Vi kjører positiv endring</Title>
          <Content>
            Vi styrke organisasjoner og ledere til å forbedre den ansatte og kundeopplevelsen
            gjennom utprøvd, konsis og engasjerende rådgivende. Ennovas ISO sertifikat setter store
            krav til vår utvikling og implementering av ansatte og kundeanalyse. Vi er veldig stolte
            av sertifiseringen som er i tråd med Ennova fortsatte ambisjon om å levere de beste
            løsningene i markedet.
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
