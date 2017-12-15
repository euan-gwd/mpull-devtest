import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
      </div>
    );
  }
}

export default Home;
