import React, { Component } from 'react';
import playIcon from '../../assets/Play-ikon.svg';
import logoer from '../../assets/Logoer.svg';
import './VideoFrame.css';

class VideoFrame extends Component {
  state = {};
  render() {
    return (
      <section className="hero">
        <div className="container">
          <p>Nordic Excellence Worldwide</p>
          <img src={playIcon} alt="play video" />
          <img src={logoer} alt="logoer link" />
        </div>
      </section>
    );
  }
}

export default VideoFrame;
