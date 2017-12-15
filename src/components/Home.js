import React, { Component, Fragment } from 'react';
import NavBar from './Navigation/NavBar';
import SideMenu from './Navigation/SideMenu/SideMenu';

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
        <NavBar handleMenuClicked={this.handleMenuToggle} />
        <hr />
        <SideMenu open={this.state.showSideMenu} closed={this.handleMenuToggleClicked} />
      </Fragment>
    );
  }
}

export default Home;
