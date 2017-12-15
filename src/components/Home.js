import React, { Component } from 'react';
import NavBar from './Navigation/NavBar';
import SideMenu from './Navigation/SideMenu/SideMenu';
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <SideMenu />
      </Container>
    );
  }
}

export default Home;

const Container = styled.div`
  max-width: 1200px;
`;
