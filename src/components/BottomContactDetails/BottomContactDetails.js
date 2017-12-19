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
            <Address>
              Store Kongensgade 81 <br /> DK-1264 Copenhagen K
            </Address>
            <Telephone>+45 86 20 21 20</Telephone>
            <Email>email@ennova.com</Email>
            <CId>CVR. nr. 19587347s</CId>
          </ContactCard>
          <ContactCard>
            <Title>Oslo</Title>
            <Address>
              Kristian IVs gate 12 <br /> NO-0164 Oslo
            </Address>
            <Telephone>+47 95 83 78 45</Telephone>
            <Email>email@ennova.com</Email>
            <CId>Org. nr. 994 815 245</CId>
          </ContactCard>
          <ContactCard>
            <Title>Stockholm</Title>
            <Address>
              Östermalmsgaten 87 b, 1 <br />SE-114 59 Stockholm
            </Address>
            <Telephone>+46 (0) 8 545 670 80</Telephone>
            <Email>email@ennova.com</Email>
            <CId>Org. nr. 556 732 9312</CId>
          </ContactCard>
          <ContactCard>
            <Title>Aarhus</Title>
            <Address>
              Daugbjergvej 26 <br /> DK-8000 Aarhus C
            </Address>
            <Telephone>+45 86 20 21 20</Telephone>
            <Email>email@ennova.com</Email>
            <CId>CVR. nr. 19587347</CId>
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
  margin: 0 0 1rem;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
`;

const Address = styled.p`
  margin: 0;
  padding: 0 2rem 0 0;
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

const Email = styled.a`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #8b5559;
  cursor: pointer;
`;

const CId = styled.p`
  margin: 1rem 0 0 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  color: black;
`;

const Links = styled.a`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  color: black;
  cursor: pointer;

  &:hover {
    color: #8b5559;
  }
`;
