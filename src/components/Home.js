import React, { Component, Fragment } from 'react';
import NavBar from './Navigation/NavBar';
import SideMenu from './Navigation/SideMenu';
import VideoFrame from './VideoFrame/VideoFrame';
import PositiveChange from './PositiveChange/PositiveChange';
import CustomerSurveySolutions from './CustomerSurveySolutions/CustomerSurveySolutions';
import RightInsiderKnowledge from './RightInsiderKnowledge/RightInsiderKnowledge';
import MeasureWorldWide from './MeasureWorldWide/MeasureWorldWide';
import ProvenByCustomers from './ProvenByCustomers/ProvenByCustomers';
import WhoWeWorkWith from './WhoWeWorkWith/WhoWeWorkWith';
import OurSurveySolutions from './OurSurveySolutions/OurSurveySolutions';
import KeepYouUpdated from './KeepYouUpdated/KeepYouUpdated';
import Bottom from './Bottom/Bottom';

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
        <PositiveChange />
        <CustomerSurveySolutions />
        <RightInsiderKnowledge />
        {/* <MeasureWorldWide />
        <ProvenByCustomers />
        <WhoWeWorkWith />
        <OurSurveySolutions />
        <KeepYouUpdated />
        <Bottom /> */}
      </Fragment>
    );
  }
}

export default Home;
