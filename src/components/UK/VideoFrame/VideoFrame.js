import React, { Component } from 'react';
import styled from 'styled-components';
import videoPlaceHolder from './images/man_tablet.png';
import playIcon from './images/Play-ikon-white.svg';
import iso from './images/ISO.svg';
import aaa from './images/AAA.svg';
import esomar from './images/ESOMAR.png';

class VideoFrame extends Component {
  state = {};
  render() {
    return (
      <BackDrop image={videoPlaceHolder}>
        <Container>
          <Title>Nordic Excellence Worldwide</Title>
          <PlayButtonGroup>
            <PlayButton src={playIcon} alt="play video" />
          </PlayButtonGroup>
          <Logoer className="logoer">
            <img src={iso} alt="isologo" />
            <img src={aaa} alt="aaalogo" />
            <img src={esomar} alt="esomarlogo" />
          </Logoer>
        </Container>
      </BackDrop>
    );
  }
}

export default VideoFrame;

const BackDrop = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
`;

const Container = styled.div`
  margin: 56px 0 0;
  padding: 1rem 1rem 0.25rem 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(3, 1fr) 50px;
  grid-template-columns: repeat(3, 33.3%);

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem;
    box-sizing: border-box;
  }

  @media screen and (min-width: 1025px) {
    margin: 45px auto 0;
    padding: 3rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(3, 1fr) 50px;
    grid-template-columns: repeat(6, 1fr);
    max-width: 1025px;
  }
`;

const Title = styled.h1`
  grid-row: 1;
  grid-column: span 3;
  align-self: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-weight: 100;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: white;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 1;
    grid-column: span 2;
    align-self: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    font-size: 2.75rem;
    text-transform: capitalize;
    color: white;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: span 2;
    align-self: center;
    margin: 0;
    padding-top: 1rem;
    font-size: 3rem;
    text-transform: capitalize;
    color: white;
  }
`;

const PlayButtonGroup = styled.div`
  grid-row: 2 / 4;
  grid-column: 2;
  justify-self: center;
  align-self: center;
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1025px) {
    grid-row: 2;
    grid-column: 3 / 5;
    justify-self: center;
    align-self: center;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

const Logoer = styled.div`
  grid-row: 4;
  grid-column: 2 / 4;
  justify-self: end;
  align-self: end;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  width: 153px;
  height: 30px;

  > img {
    align-self: center;
    max-width: 100%;
    height: 17px;
    margin: 0 0.5rem;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 4;
    grid-column: 4 / 7;
    justify-self: end;
    align-self: start;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    width: 225px;
    height: 30px;

    > img {
      align-self: center;
      max-width: 100%;
      height: 22px;
      margin: 0 0.5rem;
    }
  }
`;

const PlayButton = styled.img`
  grid-row: 1;
  grid-column: 2;
  z-index: 2;
  width: 70px;
  height: 70px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  border-radius: 100%;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 1;
    grid-column: 2;
    z-index: 2;
    width: 105px;
    height: 105px;
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1;
    grid-column: 2;
    z-index: 2;
    width: 139px;
    height: 139px;
  }
`;
