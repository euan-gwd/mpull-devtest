import React, { Component, Fragment } from 'react';
import NavBar from './Navigation/NavBar';
import SideMenu from './Navigation/SideMenu/SideMenu';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <hr />
        <SideMenu />
      </Fragment>
    );
  }
}

export default Home;
