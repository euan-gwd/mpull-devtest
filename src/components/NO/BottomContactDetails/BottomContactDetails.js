import React, { Component } from 'react';
import styled from 'styled-components';

class BottomContactDetails extends Component {
  state = {};

  handleScrollToTop = event => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

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
          <ContactLink>
            <Title>Company</Title>
            <WebLink>About</WebLink>
            <WebLink>Career</WebLink>
            <WebLink>Press &amp; Media</WebLink>
            <WebLink>Bloggers</WebLink>
            <WebLink>Contact Us</WebLink>
          </ContactLink>
          <ContactLink>
            <Title>Terms</Title>
            <WebLink>Data Security</WebLink>
            <WebLink>Privacy Policy</WebLink>
            <WebLink>Help &amp; Support</WebLink>
            <WebLink>Site Map</WebLink>
          </ContactLink>
          <ContactLink>
            <Title>Knowledge</Title>
            <WebLink>News</WebLink>
            <WebLink>Reports</WebLink>
            <WebLink>Events</WebLink>
          </ContactLink>
          <ContactLink show>
            <Title>Follow</Title>
            <WebLink>LinkedIn</WebLink>
            <WebLink>Twitter</WebLink>
            <WebLink>Facebook</WebLink>
            <WebLink>Youtube</WebLink>
            <WebLink>Newsletter</WebLink>
          </ContactLink>
          <ButtonGroup>
            <UpArrow onClick={this.handleScrollToTop}>&#8963;</UpArrow>
            <ButtonText onClick={this.handleScrollToTop}>Tilbake til toppen</ButtonText>
            <CopyRightFooter>© Ennova A/S 2017</CopyRightFooter>
          </ButtonGroup>
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
  margin: 3rem 1rem 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem;
    box-sizing: border-box;
    grid-template-rows: 1fr 1fr 0.25fr;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem 2rem;
  }

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    padding: 3rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr 0.25fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6rem 1rem;
    max-width: 1025px;
  }
`;

const ContactCard = styled.article`
  margin: 3rem 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (min-width: 1025px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const ContactLink = styled.article`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: ${props => (props.show ? 'block' : 'none')};

  @media screen and (min-width: 1025px) {
    align-self: stretch;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
  }
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
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  color: black;
  cursor: pointer;

  &:hover {
    color: #8b5559;
    font-weight: 300;
  }
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

const WebLink = styled.a`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  display: block;
  color: black;
  cursor: pointer;
  height: 40px;

  &:hover {
    color: #8b5559;
    font-weight: 300;
  }

  @media screen and (min-width: 1025px) {
    height: unset;
  }
`;

const ButtonGroup = styled.div`
  margin: 2rem 0 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 3;
    grid-column: 1 / 5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1025px) {
    grid-column: 1 / 5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const UpArrow = styled.p`
  grid-row: 1;
  grid-column: span 2;
  align-self: end;
  justify-self: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 3rem;
  color: #818181;
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: span 2;
    align-self: end;
    justify-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 3rem;
    color: #818181;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ButtonText = styled.a`
  grid-row: 2;
  grid-column: 1 / 3;
  justify-self: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #818181;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;

  @media screen and (min-width: 1025px) {
    grid-row: 2;
    grid-column: 1 / 3;
    justify-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 1rem;
    text-transform: capitalize;
    color: #818181;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #8b5559;
      font-weight: 300;
    }
  }
`;

const CopyRightFooter = styled.span`
  margin: 1rem 0 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #818181;

  @media screen and (min-width: 1025px) {
    grid-row: 2;
    grid-column: 2;
    justify-self: end;
    z-index: 2;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    line-height: 1.5rem;
    font-size: 1rem;
    color: #818181;
  }
`;
