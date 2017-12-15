import React, { Component } from 'react';
import NavBar from './Navigation/NavBar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
      </div>
    );
  }
}

export default Home;
