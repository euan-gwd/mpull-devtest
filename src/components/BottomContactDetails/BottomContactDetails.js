import React, { Component } from 'react';
import styled from 'styled-components';

class BottomContactDetails extends Component {
  state = {};
  render() {
    return (
      <BackDrop>
        <Container>
          <ContactCard>
            <Title>Copenhagen</Title>
            <Address>Store Kongensgade 81 DK-1264 Copenhagen K </Address>
            <Telephone>+45 86 20 21 20</Telephone>
            <Email>email@ennova.com</Email>
            <CVRId>CVR. nr. 19587347s</CVRId>
          </ContactCard>
          <ContactCard>
            <Title>Copenhagen</Title>
            <Address>Store Kongensgade 81 DK-1264 Copenhagen K </Address>
            <Telephone>+45 86 20 21 20</Telephone>
            <Email>email@ennova.com</Email>
            <CVRId>CVR. nr. 19587347s</CVRId>
          </ContactCard>
          <ContactCard>
            <Title>Copenhagen</Title>
            <Address>Store Kongensgade 81 DK-1264 Copenhagen K </Address>
            <Telephone>+45 86 20 21 20</Telephone>
            <Email>email@ennova.com</Email>
            <CVRId>CVR. nr. 19587347s</CVRId>
          </ContactCard>
          <ContactCard>
            <Title>Copenhagen</Title>
            <Address>Store Kongensgade 81 DK-1264 Copenhagen K </Address>
            <Telephone>+45 86 20 21 20</Telephone>
            <Email>email@ennova.com</Email>
            <CVRId>CVR. nr. 19587347s</CVRId>
          </ContactCard>
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
  background-color: lightgrey;
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
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    max-width: 1024px;
  }
`;

const ContactCard = styled.article`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: black;
`;

const Address = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  color: black;
`;

const Telephone = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  color: black;
`;

const Email = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  color: black;
`;

const CVRId = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  color: black;
`;
