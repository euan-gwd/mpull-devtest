import React, { Component, Fragment } from 'react';
import NavBar from './Navigation/NavBar';
import SideMenu from './Navigation/SideMenu';
import VideoFrame from './Video_billde/VideoFrame';
// import styled from 'styled-components';

class Home extends Component {
  state = {
    showSideMenu: false
  };

  handleMenuToggle = () => {
    this.setState(prevState => {
      return { showSideMenu: !prevState.showSideMenu };
    });
  };

  render() {
    return (
      <Fragment>
        <NavBar open={this.state.showSideMenu} handleMenuToggle={this.handleMenuToggle} />
        <SideMenu open={this.state.showSideMenu} />
        <VideoFrame />
      </Fragment>
    );
  }
}

export default Home;
