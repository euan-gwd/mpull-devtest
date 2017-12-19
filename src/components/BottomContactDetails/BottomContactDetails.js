import React, { Component } from 'react';
import styled from 'styled-components';

class BottomContactDetails extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <Wrapper>
            <Title>Nordic Excellence Worldwide</Title>
            <Content>
              Ennova leverer viden, der forandrer. Vi rådgiver gennem hele processen, så ny viden
              bliver forankret i virksomheden – og fører til den ønskede forandring.
            </Content>
          </Wrapper>
          <Button>Go To Top</Button>
        </Container>
      </BackDrop>
    );
  }
}

export default BottomContactDetails;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: grey;
`;

const Container = styled.div`
  margin: 0;
  padding: 3rem 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 0.25fr 1fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 3rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(6, 1fr);
    max-width: 1024px;
  }
`;

const Wrapper = styled.div`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  background: white;
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
    text-decoration: underline;
  }
`;
